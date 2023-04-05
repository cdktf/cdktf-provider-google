# `computeRegionBackendService` Submodule <a name="`computeRegionBackendService` Submodule" id="@cdktf/provider-google.computeRegionBackendService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRegionBackendService <a name="ComputeRegionBackendService" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service google_compute_region_backend_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregionbackendservice"

computeregionbackendservice.NewComputeRegionBackendService(scope Construct, id *string, config ComputeRegionBackendServiceConfig) ComputeRegionBackendService
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig">ComputeRegionBackendServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig">ComputeRegionBackendServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.putBackend">PutBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.putCdnPolicy">PutCdnPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.putCircuitBreakers">PutCircuitBreakers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.putConsistentHash">PutConsistentHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.putFailoverPolicy">PutFailoverPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.putIap">PutIap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.putLogConfig">PutLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.putOutlierDetection">PutOutlierDetection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetAffinityCookieTtlSec">ResetAffinityCookieTtlSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetBackend">ResetBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetCdnPolicy">ResetCdnPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetCircuitBreakers">ResetCircuitBreakers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetConnectionDrainingTimeoutSec">ResetConnectionDrainingTimeoutSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetConsistentHash">ResetConsistentHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetEnableCdn">ResetEnableCdn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetFailoverPolicy">ResetFailoverPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetHealthChecks">ResetHealthChecks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetIap">ResetIap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetLoadBalancingScheme">ResetLoadBalancingScheme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetLocalityLbPolicy">ResetLocalityLbPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetLogConfig">ResetLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetOutlierDetection">ResetOutlierDetection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetPortName">ResetPortName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetSessionAffinity">ResetSessionAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetTimeoutSec">ResetTimeoutSec</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutBackend` <a name="PutBackend" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.putBackend"></a>

```go
func PutBackend(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.putBackend.parameter.value"></a>

- *Type:* interface{}

---

##### `PutCdnPolicy` <a name="PutCdnPolicy" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.putCdnPolicy"></a>

```go
func PutCdnPolicy(value ComputeRegionBackendServiceCdnPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.putCdnPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicy">ComputeRegionBackendServiceCdnPolicy</a>

---

##### `PutCircuitBreakers` <a name="PutCircuitBreakers" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.putCircuitBreakers"></a>

```go
func PutCircuitBreakers(value ComputeRegionBackendServiceCircuitBreakers)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.putCircuitBreakers.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakers">ComputeRegionBackendServiceCircuitBreakers</a>

---

##### `PutConsistentHash` <a name="PutConsistentHash" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.putConsistentHash"></a>

```go
func PutConsistentHash(value ComputeRegionBackendServiceConsistentHash)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.putConsistentHash.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHash">ComputeRegionBackendServiceConsistentHash</a>

---

##### `PutFailoverPolicy` <a name="PutFailoverPolicy" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.putFailoverPolicy"></a>

```go
func PutFailoverPolicy(value ComputeRegionBackendServiceFailoverPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.putFailoverPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicy">ComputeRegionBackendServiceFailoverPolicy</a>

---

##### `PutIap` <a name="PutIap" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.putIap"></a>

```go
func PutIap(value ComputeRegionBackendServiceIap)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.putIap.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIap">ComputeRegionBackendServiceIap</a>

---

##### `PutLogConfig` <a name="PutLogConfig" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.putLogConfig"></a>

```go
func PutLogConfig(value ComputeRegionBackendServiceLogConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.putLogConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfig">ComputeRegionBackendServiceLogConfig</a>

---

##### `PutOutlierDetection` <a name="PutOutlierDetection" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.putOutlierDetection"></a>

```go
func PutOutlierDetection(value ComputeRegionBackendServiceOutlierDetection)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.putOutlierDetection.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetection">ComputeRegionBackendServiceOutlierDetection</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.putTimeouts"></a>

```go
func PutTimeouts(value ComputeRegionBackendServiceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeouts">ComputeRegionBackendServiceTimeouts</a>

---

##### `ResetAffinityCookieTtlSec` <a name="ResetAffinityCookieTtlSec" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetAffinityCookieTtlSec"></a>

```go
func ResetAffinityCookieTtlSec()
```

##### `ResetBackend` <a name="ResetBackend" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetBackend"></a>

```go
func ResetBackend()
```

##### `ResetCdnPolicy` <a name="ResetCdnPolicy" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetCdnPolicy"></a>

```go
func ResetCdnPolicy()
```

##### `ResetCircuitBreakers` <a name="ResetCircuitBreakers" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetCircuitBreakers"></a>

```go
func ResetCircuitBreakers()
```

##### `ResetConnectionDrainingTimeoutSec` <a name="ResetConnectionDrainingTimeoutSec" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetConnectionDrainingTimeoutSec"></a>

```go
func ResetConnectionDrainingTimeoutSec()
```

##### `ResetConsistentHash` <a name="ResetConsistentHash" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetConsistentHash"></a>

```go
func ResetConsistentHash()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEnableCdn` <a name="ResetEnableCdn" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetEnableCdn"></a>

```go
func ResetEnableCdn()
```

##### `ResetFailoverPolicy` <a name="ResetFailoverPolicy" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetFailoverPolicy"></a>

```go
func ResetFailoverPolicy()
```

##### `ResetHealthChecks` <a name="ResetHealthChecks" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetHealthChecks"></a>

```go
func ResetHealthChecks()
```

##### `ResetIap` <a name="ResetIap" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetIap"></a>

```go
func ResetIap()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetId"></a>

```go
func ResetId()
```

##### `ResetLoadBalancingScheme` <a name="ResetLoadBalancingScheme" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetLoadBalancingScheme"></a>

```go
func ResetLoadBalancingScheme()
```

##### `ResetLocalityLbPolicy` <a name="ResetLocalityLbPolicy" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetLocalityLbPolicy"></a>

```go
func ResetLocalityLbPolicy()
```

##### `ResetLogConfig` <a name="ResetLogConfig" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetLogConfig"></a>

```go
func ResetLogConfig()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetNetwork"></a>

```go
func ResetNetwork()
```

##### `ResetOutlierDetection` <a name="ResetOutlierDetection" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetOutlierDetection"></a>

```go
func ResetOutlierDetection()
```

##### `ResetPortName` <a name="ResetPortName" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetPortName"></a>

```go
func ResetPortName()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetProject"></a>

```go
func ResetProject()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetProtocol"></a>

```go
func ResetProtocol()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetSessionAffinity` <a name="ResetSessionAffinity" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetSessionAffinity"></a>

```go
func ResetSessionAffinity()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTimeoutSec` <a name="ResetTimeoutSec" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetTimeoutSec"></a>

```go
func ResetTimeoutSec()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregionbackendservice"

computeregionbackendservice.ComputeRegionBackendService_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregionbackendservice"

computeregionbackendservice.ComputeRegionBackendService_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregionbackendservice"

computeregionbackendservice.ComputeRegionBackendService_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.backend">Backend</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendList">ComputeRegionBackendServiceBackendList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.cdnPolicy">CdnPolicy</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference">ComputeRegionBackendServiceCdnPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.circuitBreakers">CircuitBreakers</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference">ComputeRegionBackendServiceCircuitBreakersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.consistentHash">ConsistentHash</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference">ComputeRegionBackendServiceConsistentHashOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.creationTimestamp">CreationTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.failoverPolicy">FailoverPolicy</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference">ComputeRegionBackendServiceFailoverPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.fingerprint">Fingerprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.iap">Iap</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference">ComputeRegionBackendServiceIapOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.logConfig">LogConfig</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference">ComputeRegionBackendServiceLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.outlierDetection">OutlierDetection</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference">ComputeRegionBackendServiceOutlierDetectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference">ComputeRegionBackendServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.affinityCookieTtlSecInput">AffinityCookieTtlSecInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.backendInput">BackendInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.cdnPolicyInput">CdnPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicy">ComputeRegionBackendServiceCdnPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.circuitBreakersInput">CircuitBreakersInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakers">ComputeRegionBackendServiceCircuitBreakers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.connectionDrainingTimeoutSecInput">ConnectionDrainingTimeoutSecInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.consistentHashInput">ConsistentHashInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHash">ComputeRegionBackendServiceConsistentHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.enableCdnInput">EnableCdnInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.failoverPolicyInput">FailoverPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicy">ComputeRegionBackendServiceFailoverPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.healthChecksInput">HealthChecksInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.iapInput">IapInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIap">ComputeRegionBackendServiceIap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.loadBalancingSchemeInput">LoadBalancingSchemeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.localityLbPolicyInput">LocalityLbPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.logConfigInput">LogConfigInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfig">ComputeRegionBackendServiceLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.outlierDetectionInput">OutlierDetectionInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetection">ComputeRegionBackendServiceOutlierDetection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.portNameInput">PortNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.sessionAffinityInput">SessionAffinityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.timeoutSecInput">TimeoutSecInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.affinityCookieTtlSec">AffinityCookieTtlSec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.connectionDrainingTimeoutSec">ConnectionDrainingTimeoutSec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.enableCdn">EnableCdn</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.healthChecks">HealthChecks</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.loadBalancingScheme">LoadBalancingScheme</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.localityLbPolicy">LocalityLbPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.portName">PortName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.sessionAffinity">SessionAffinity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.timeoutSec">TimeoutSec</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.backend"></a>

```go
func Backend() ComputeRegionBackendServiceBackendList
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendList">ComputeRegionBackendServiceBackendList</a>

---

##### `CdnPolicy`<sup>Required</sup> <a name="CdnPolicy" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.cdnPolicy"></a>

```go
func CdnPolicy() ComputeRegionBackendServiceCdnPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference">ComputeRegionBackendServiceCdnPolicyOutputReference</a>

---

##### `CircuitBreakers`<sup>Required</sup> <a name="CircuitBreakers" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.circuitBreakers"></a>

```go
func CircuitBreakers() ComputeRegionBackendServiceCircuitBreakersOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference">ComputeRegionBackendServiceCircuitBreakersOutputReference</a>

---

##### `ConsistentHash`<sup>Required</sup> <a name="ConsistentHash" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.consistentHash"></a>

```go
func ConsistentHash() ComputeRegionBackendServiceConsistentHashOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference">ComputeRegionBackendServiceConsistentHashOutputReference</a>

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.creationTimestamp"></a>

```go
func CreationTimestamp() *string
```

- *Type:* *string

---

##### `FailoverPolicy`<sup>Required</sup> <a name="FailoverPolicy" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.failoverPolicy"></a>

```go
func FailoverPolicy() ComputeRegionBackendServiceFailoverPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference">ComputeRegionBackendServiceFailoverPolicyOutputReference</a>

---

##### `Fingerprint`<sup>Required</sup> <a name="Fingerprint" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.fingerprint"></a>

```go
func Fingerprint() *string
```

- *Type:* *string

---

##### `Iap`<sup>Required</sup> <a name="Iap" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.iap"></a>

```go
func Iap() ComputeRegionBackendServiceIapOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference">ComputeRegionBackendServiceIapOutputReference</a>

---

##### `LogConfig`<sup>Required</sup> <a name="LogConfig" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.logConfig"></a>

```go
func LogConfig() ComputeRegionBackendServiceLogConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference">ComputeRegionBackendServiceLogConfigOutputReference</a>

---

##### `OutlierDetection`<sup>Required</sup> <a name="OutlierDetection" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.outlierDetection"></a>

```go
func OutlierDetection() ComputeRegionBackendServiceOutlierDetectionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference">ComputeRegionBackendServiceOutlierDetectionOutputReference</a>

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.timeouts"></a>

```go
func Timeouts() ComputeRegionBackendServiceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference">ComputeRegionBackendServiceTimeoutsOutputReference</a>

---

##### `AffinityCookieTtlSecInput`<sup>Optional</sup> <a name="AffinityCookieTtlSecInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.affinityCookieTtlSecInput"></a>

```go
func AffinityCookieTtlSecInput() *f64
```

- *Type:* *f64

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.backendInput"></a>

```go
func BackendInput() interface{}
```

- *Type:* interface{}

---

##### `CdnPolicyInput`<sup>Optional</sup> <a name="CdnPolicyInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.cdnPolicyInput"></a>

```go
func CdnPolicyInput() ComputeRegionBackendServiceCdnPolicy
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicy">ComputeRegionBackendServiceCdnPolicy</a>

---

##### `CircuitBreakersInput`<sup>Optional</sup> <a name="CircuitBreakersInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.circuitBreakersInput"></a>

```go
func CircuitBreakersInput() ComputeRegionBackendServiceCircuitBreakers
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakers">ComputeRegionBackendServiceCircuitBreakers</a>

---

##### `ConnectionDrainingTimeoutSecInput`<sup>Optional</sup> <a name="ConnectionDrainingTimeoutSecInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.connectionDrainingTimeoutSecInput"></a>

```go
func ConnectionDrainingTimeoutSecInput() *f64
```

- *Type:* *f64

---

##### `ConsistentHashInput`<sup>Optional</sup> <a name="ConsistentHashInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.consistentHashInput"></a>

```go
func ConsistentHashInput() ComputeRegionBackendServiceConsistentHash
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHash">ComputeRegionBackendServiceConsistentHash</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EnableCdnInput`<sup>Optional</sup> <a name="EnableCdnInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.enableCdnInput"></a>

```go
func EnableCdnInput() interface{}
```

- *Type:* interface{}

---

##### `FailoverPolicyInput`<sup>Optional</sup> <a name="FailoverPolicyInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.failoverPolicyInput"></a>

```go
func FailoverPolicyInput() ComputeRegionBackendServiceFailoverPolicy
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicy">ComputeRegionBackendServiceFailoverPolicy</a>

---

##### `HealthChecksInput`<sup>Optional</sup> <a name="HealthChecksInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.healthChecksInput"></a>

```go
func HealthChecksInput() *[]*string
```

- *Type:* *[]*string

---

##### `IapInput`<sup>Optional</sup> <a name="IapInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.iapInput"></a>

```go
func IapInput() ComputeRegionBackendServiceIap
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIap">ComputeRegionBackendServiceIap</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LoadBalancingSchemeInput`<sup>Optional</sup> <a name="LoadBalancingSchemeInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.loadBalancingSchemeInput"></a>

```go
func LoadBalancingSchemeInput() *string
```

- *Type:* *string

---

##### `LocalityLbPolicyInput`<sup>Optional</sup> <a name="LocalityLbPolicyInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.localityLbPolicyInput"></a>

```go
func LocalityLbPolicyInput() *string
```

- *Type:* *string

---

##### `LogConfigInput`<sup>Optional</sup> <a name="LogConfigInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.logConfigInput"></a>

```go
func LogConfigInput() ComputeRegionBackendServiceLogConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfig">ComputeRegionBackendServiceLogConfig</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `OutlierDetectionInput`<sup>Optional</sup> <a name="OutlierDetectionInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.outlierDetectionInput"></a>

```go
func OutlierDetectionInput() ComputeRegionBackendServiceOutlierDetection
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetection">ComputeRegionBackendServiceOutlierDetection</a>

---

##### `PortNameInput`<sup>Optional</sup> <a name="PortNameInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.portNameInput"></a>

```go
func PortNameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `SessionAffinityInput`<sup>Optional</sup> <a name="SessionAffinityInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.sessionAffinityInput"></a>

```go
func SessionAffinityInput() *string
```

- *Type:* *string

---

##### `TimeoutSecInput`<sup>Optional</sup> <a name="TimeoutSecInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.timeoutSecInput"></a>

```go
func TimeoutSecInput() *f64
```

- *Type:* *f64

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AffinityCookieTtlSec`<sup>Required</sup> <a name="AffinityCookieTtlSec" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.affinityCookieTtlSec"></a>

```go
func AffinityCookieTtlSec() *f64
```

- *Type:* *f64

---

##### `ConnectionDrainingTimeoutSec`<sup>Required</sup> <a name="ConnectionDrainingTimeoutSec" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.connectionDrainingTimeoutSec"></a>

```go
func ConnectionDrainingTimeoutSec() *f64
```

- *Type:* *f64

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EnableCdn`<sup>Required</sup> <a name="EnableCdn" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.enableCdn"></a>

```go
func EnableCdn() interface{}
```

- *Type:* interface{}

---

##### `HealthChecks`<sup>Required</sup> <a name="HealthChecks" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.healthChecks"></a>

```go
func HealthChecks() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LoadBalancingScheme`<sup>Required</sup> <a name="LoadBalancingScheme" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.loadBalancingScheme"></a>

```go
func LoadBalancingScheme() *string
```

- *Type:* *string

---

##### `LocalityLbPolicy`<sup>Required</sup> <a name="LocalityLbPolicy" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.localityLbPolicy"></a>

```go
func LocalityLbPolicy() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `PortName`<sup>Required</sup> <a name="PortName" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.portName"></a>

```go
func PortName() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `SessionAffinity`<sup>Required</sup> <a name="SessionAffinity" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.sessionAffinity"></a>

```go
func SessionAffinity() *string
```

- *Type:* *string

---

##### `TimeoutSec`<sup>Required</sup> <a name="TimeoutSec" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.timeoutSec"></a>

```go
func TimeoutSec() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRegionBackendServiceBackend <a name="ComputeRegionBackendServiceBackend" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackend"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackend.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregionbackendservice"

&computeregionbackendservice.ComputeRegionBackendServiceBackend {
	Group: *string,
	BalancingMode: *string,
	CapacityScaler: *f64,
	Description: *string,
	Failover: interface{},
	MaxConnections: *f64,
	MaxConnectionsPerEndpoint: *f64,
	MaxConnectionsPerInstance: *f64,
	MaxRate: *f64,
	MaxRatePerEndpoint: *f64,
	MaxRatePerInstance: *f64,
	MaxUtilization: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackend.property.group">Group</a></code> | <code>*string</code> | The fully-qualified URL of an Instance Group or Network Endpoint Group resource. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackend.property.balancingMode">BalancingMode</a></code> | <code>*string</code> | Specifies the balancing mode for this backend. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackend.property.capacityScaler">CapacityScaler</a></code> | <code>*f64</code> | A multiplier applied to the group's maximum servicing capacity (based on UTILIZATION, RATE or CONNECTION). |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackend.property.description">Description</a></code> | <code>*string</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackend.property.failover">Failover</a></code> | <code>interface{}</code> | This field designates whether this is a failover backend. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackend.property.maxConnections">MaxConnections</a></code> | <code>*f64</code> | The max number of simultaneous connections for the group. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackend.property.maxConnectionsPerEndpoint">MaxConnectionsPerEndpoint</a></code> | <code>*f64</code> | The max number of simultaneous connections that a single backend network endpoint can handle. Cannot be set for INTERNAL backend services. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackend.property.maxConnectionsPerInstance">MaxConnectionsPerInstance</a></code> | <code>*f64</code> | The max number of simultaneous connections that a single backend instance can handle. Cannot be set for INTERNAL backend services. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackend.property.maxRate">MaxRate</a></code> | <code>*f64</code> | The max requests per second (RPS) of the group. Cannot be set for INTERNAL backend services. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackend.property.maxRatePerEndpoint">MaxRatePerEndpoint</a></code> | <code>*f64</code> | The max requests per second (RPS) that a single backend network endpoint can handle. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackend.property.maxRatePerInstance">MaxRatePerInstance</a></code> | <code>*f64</code> | The max requests per second (RPS) that a single backend instance can handle. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackend.property.maxUtilization">MaxUtilization</a></code> | <code>*f64</code> | Used when balancingMode is UTILIZATION. |

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackend.property.group"></a>

```go
Group *string
```

- *Type:* *string

The fully-qualified URL of an Instance Group or Network Endpoint Group resource.

In case of instance group this defines the list
of instances that serve traffic. Member virtual machine
instances from each instance group must live in the same zone as
the instance group itself. No two backends in a backend service
are allowed to use same Instance Group resource.

For Network Endpoint Groups this defines list of endpoints. All
endpoints of Network Endpoint Group must be hosted on instances
located in the same zone as the Network Endpoint Group.

Backend services cannot mix Instance Group and
Network Endpoint Group backends.

When the 'load_balancing_scheme' is INTERNAL, only instance groups
are supported.

Note that you must specify an Instance Group or Network Endpoint
Group resource using the fully-qualified URL, rather than a
partial URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#group ComputeRegionBackendService#group}

---

##### `BalancingMode`<sup>Optional</sup> <a name="BalancingMode" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackend.property.balancingMode"></a>

```go
BalancingMode *string
```

- *Type:* *string

Specifies the balancing mode for this backend.

See the [Backend Services Overview](https://cloud.google.com/load-balancing/docs/backend-service#balancing-mode)
for an explanation of load balancing modes. Default value: "CONNECTION" Possible values: ["UTILIZATION", "RATE", "CONNECTION"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#balancing_mode ComputeRegionBackendService#balancing_mode}

---

##### `CapacityScaler`<sup>Optional</sup> <a name="CapacityScaler" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackend.property.capacityScaler"></a>

```go
CapacityScaler *f64
```

- *Type:* *f64

A multiplier applied to the group's maximum servicing capacity (based on UTILIZATION, RATE or CONNECTION).

~>**NOTE**: This field cannot be set for
INTERNAL region backend services (default loadBalancingScheme),
but is required for non-INTERNAL backend service. The total
capacity_scaler for all backends must be non-zero.

A setting of 0 means the group is completely drained, offering
0% of its available Capacity. Valid range is [0.0,1.0].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#capacity_scaler ComputeRegionBackendService#capacity_scaler}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackend.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#description ComputeRegionBackendService#description}

---

##### `Failover`<sup>Optional</sup> <a name="Failover" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackend.property.failover"></a>

```go
Failover interface{}
```

- *Type:* interface{}

This field designates whether this is a failover backend.

More
than one failover backend can be configured for a given RegionBackendService.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#failover ComputeRegionBackendService#failover}

---

##### `MaxConnections`<sup>Optional</sup> <a name="MaxConnections" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackend.property.maxConnections"></a>

```go
MaxConnections *f64
```

- *Type:* *f64

The max number of simultaneous connections for the group.

Can
be used with either CONNECTION or UTILIZATION balancing modes.
Cannot be set for INTERNAL backend services.

For CONNECTION mode, either maxConnections or one
of maxConnectionsPerInstance or maxConnectionsPerEndpoint,
as appropriate for group type, must be set.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#max_connections ComputeRegionBackendService#max_connections}

---

##### `MaxConnectionsPerEndpoint`<sup>Optional</sup> <a name="MaxConnectionsPerEndpoint" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackend.property.maxConnectionsPerEndpoint"></a>

```go
MaxConnectionsPerEndpoint *f64
```

- *Type:* *f64

The max number of simultaneous connections that a single backend network endpoint can handle. Cannot be set for INTERNAL backend services.

This is used to calculate the capacity of the group. Can be
used in either CONNECTION or UTILIZATION balancing modes. For
CONNECTION mode, either maxConnections or
maxConnectionsPerEndpoint must be set.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#max_connections_per_endpoint ComputeRegionBackendService#max_connections_per_endpoint}

---

##### `MaxConnectionsPerInstance`<sup>Optional</sup> <a name="MaxConnectionsPerInstance" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackend.property.maxConnectionsPerInstance"></a>

```go
MaxConnectionsPerInstance *f64
```

- *Type:* *f64

The max number of simultaneous connections that a single backend instance can handle. Cannot be set for INTERNAL backend services.

This is used to calculate the capacity of the group.
Can be used in either CONNECTION or UTILIZATION balancing modes.
For CONNECTION mode, either maxConnections or
maxConnectionsPerInstance must be set.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#max_connections_per_instance ComputeRegionBackendService#max_connections_per_instance}

---

##### `MaxRate`<sup>Optional</sup> <a name="MaxRate" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackend.property.maxRate"></a>

```go
MaxRate *f64
```

- *Type:* *f64

The max requests per second (RPS) of the group. Cannot be set for INTERNAL backend services.

Can be used with either RATE or UTILIZATION balancing modes,
but required if RATE mode. Either maxRate or one
of maxRatePerInstance or maxRatePerEndpoint, as appropriate for
group type, must be set.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#max_rate ComputeRegionBackendService#max_rate}

---

##### `MaxRatePerEndpoint`<sup>Optional</sup> <a name="MaxRatePerEndpoint" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackend.property.maxRatePerEndpoint"></a>

```go
MaxRatePerEndpoint *f64
```

- *Type:* *f64

The max requests per second (RPS) that a single backend network endpoint can handle.

This is used to calculate the capacity of
the group. Can be used in either balancing mode. For RATE mode,
either maxRate or maxRatePerEndpoint must be set. Cannot be set
for INTERNAL backend services.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#max_rate_per_endpoint ComputeRegionBackendService#max_rate_per_endpoint}

---

##### `MaxRatePerInstance`<sup>Optional</sup> <a name="MaxRatePerInstance" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackend.property.maxRatePerInstance"></a>

```go
MaxRatePerInstance *f64
```

- *Type:* *f64

The max requests per second (RPS) that a single backend instance can handle.

This is used to calculate the capacity of
the group. Can be used in either balancing mode. For RATE mode,
either maxRate or maxRatePerInstance must be set. Cannot be set
for INTERNAL backend services.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#max_rate_per_instance ComputeRegionBackendService#max_rate_per_instance}

---

##### `MaxUtilization`<sup>Optional</sup> <a name="MaxUtilization" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackend.property.maxUtilization"></a>

```go
MaxUtilization *f64
```

- *Type:* *f64

Used when balancingMode is UTILIZATION.

This ratio defines the
CPU utilization target for the group. Valid range is [0.0, 1.0].
Cannot be set for INTERNAL backend services.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#max_utilization ComputeRegionBackendService#max_utilization}

---

### ComputeRegionBackendServiceCdnPolicy <a name="ComputeRegionBackendServiceCdnPolicy" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregionbackendservice"

&computeregionbackendservice.ComputeRegionBackendServiceCdnPolicy {
	CacheKeyPolicy: github.com/cdktf/cdktf-provider-google-go/google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy,
	CacheMode: *string,
	ClientTtl: *f64,
	DefaultTtl: *f64,
	MaxTtl: *f64,
	NegativeCaching: interface{},
	NegativeCachingPolicy: interface{},
	ServeWhileStale: *f64,
	SignedUrlCacheMaxAgeSec: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicy.property.cacheKeyPolicy">CacheKeyPolicy</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy">ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy</a></code> | cache_key_policy block. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicy.property.cacheMode">CacheMode</a></code> | <code>*string</code> | Specifies the cache setting for all responses from this backend. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicy.property.clientTtl">ClientTtl</a></code> | <code>*f64</code> | Specifies the maximum allowed TTL for cached content served by this origin. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicy.property.defaultTtl">DefaultTtl</a></code> | <code>*f64</code> | Specifies the default TTL for cached content served by this origin for responses that do not have an existing valid TTL (max-age or s-max-age). |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicy.property.maxTtl">MaxTtl</a></code> | <code>*f64</code> | Specifies the maximum allowed TTL for cached content served by this origin. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicy.property.negativeCaching">NegativeCaching</a></code> | <code>interface{}</code> | Negative caching allows per-status code TTLs to be set, in order to apply fine-grained caching for common errors or redirects. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicy.property.negativeCachingPolicy">NegativeCachingPolicy</a></code> | <code>interface{}</code> | negative_caching_policy block. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicy.property.serveWhileStale">ServeWhileStale</a></code> | <code>*f64</code> | Serve existing content from the cache (if available) when revalidating content with the origin, or when an error is encountered when refreshing the cache. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicy.property.signedUrlCacheMaxAgeSec">SignedUrlCacheMaxAgeSec</a></code> | <code>*f64</code> | Maximum number of seconds the response to a signed URL request will be considered fresh, defaults to 1hr (3600s). |

---

##### `CacheKeyPolicy`<sup>Optional</sup> <a name="CacheKeyPolicy" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicy.property.cacheKeyPolicy"></a>

```go
CacheKeyPolicy ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy">ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy</a>

cache_key_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#cache_key_policy ComputeRegionBackendService#cache_key_policy}

---

##### `CacheMode`<sup>Optional</sup> <a name="CacheMode" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicy.property.cacheMode"></a>

```go
CacheMode *string
```

- *Type:* *string

Specifies the cache setting for all responses from this backend.

The possible values are: USE_ORIGIN_HEADERS, FORCE_CACHE_ALL and CACHE_ALL_STATIC Possible values: ["USE_ORIGIN_HEADERS", "FORCE_CACHE_ALL", "CACHE_ALL_STATIC"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#cache_mode ComputeRegionBackendService#cache_mode}

---

##### `ClientTtl`<sup>Optional</sup> <a name="ClientTtl" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicy.property.clientTtl"></a>

```go
ClientTtl *f64
```

- *Type:* *f64

Specifies the maximum allowed TTL for cached content served by this origin.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#client_ttl ComputeRegionBackendService#client_ttl}

---

##### `DefaultTtl`<sup>Optional</sup> <a name="DefaultTtl" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicy.property.defaultTtl"></a>

```go
DefaultTtl *f64
```

- *Type:* *f64

Specifies the default TTL for cached content served by this origin for responses that do not have an existing valid TTL (max-age or s-max-age).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#default_ttl ComputeRegionBackendService#default_ttl}

---

##### `MaxTtl`<sup>Optional</sup> <a name="MaxTtl" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicy.property.maxTtl"></a>

```go
MaxTtl *f64
```

- *Type:* *f64

Specifies the maximum allowed TTL for cached content served by this origin.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#max_ttl ComputeRegionBackendService#max_ttl}

---

##### `NegativeCaching`<sup>Optional</sup> <a name="NegativeCaching" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicy.property.negativeCaching"></a>

```go
NegativeCaching interface{}
```

- *Type:* interface{}

Negative caching allows per-status code TTLs to be set, in order to apply fine-grained caching for common errors or redirects.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#negative_caching ComputeRegionBackendService#negative_caching}

---

##### `NegativeCachingPolicy`<sup>Optional</sup> <a name="NegativeCachingPolicy" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicy.property.negativeCachingPolicy"></a>

```go
NegativeCachingPolicy interface{}
```

- *Type:* interface{}

negative_caching_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#negative_caching_policy ComputeRegionBackendService#negative_caching_policy}

---

##### `ServeWhileStale`<sup>Optional</sup> <a name="ServeWhileStale" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicy.property.serveWhileStale"></a>

```go
ServeWhileStale *f64
```

- *Type:* *f64

Serve existing content from the cache (if available) when revalidating content with the origin, or when an error is encountered when refreshing the cache.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#serve_while_stale ComputeRegionBackendService#serve_while_stale}

---

##### `SignedUrlCacheMaxAgeSec`<sup>Optional</sup> <a name="SignedUrlCacheMaxAgeSec" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicy.property.signedUrlCacheMaxAgeSec"></a>

```go
SignedUrlCacheMaxAgeSec *f64
```

- *Type:* *f64

Maximum number of seconds the response to a signed URL request will be considered fresh, defaults to 1hr (3600s).

After this
time period, the response will be revalidated before
being served.

When serving responses to signed URL requests, Cloud CDN will
internally behave as though all responses from this backend had a
"Cache-Control: public, max-age=[TTL]" header, regardless of any
existing Cache-Control header. The actual headers served in
responses will not be altered.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#signed_url_cache_max_age_sec ComputeRegionBackendService#signed_url_cache_max_age_sec}

---

### ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy <a name="ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregionbackendservice"

&computeregionbackendservice.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy {
	IncludeHost: interface{},
	IncludeNamedCookies: *[]*string,
	IncludeProtocol: interface{},
	IncludeQueryString: interface{},
	QueryStringBlacklist: *[]*string,
	QueryStringWhitelist: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy.property.includeHost">IncludeHost</a></code> | <code>interface{}</code> | If true requests to different hosts will be cached separately. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy.property.includeNamedCookies">IncludeNamedCookies</a></code> | <code>*[]*string</code> | Names of cookies to include in cache keys. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy.property.includeProtocol">IncludeProtocol</a></code> | <code>interface{}</code> | If true, http and https requests will be cached separately. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy.property.includeQueryString">IncludeQueryString</a></code> | <code>interface{}</code> | If true, include query string parameters in the cache key according to query_string_whitelist and query_string_blacklist. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy.property.queryStringBlacklist">QueryStringBlacklist</a></code> | <code>*[]*string</code> | Names of query string parameters to exclude in cache keys. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy.property.queryStringWhitelist">QueryStringWhitelist</a></code> | <code>*[]*string</code> | Names of query string parameters to include in cache keys. |

---

##### `IncludeHost`<sup>Optional</sup> <a name="IncludeHost" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy.property.includeHost"></a>

```go
IncludeHost interface{}
```

- *Type:* interface{}

If true requests to different hosts will be cached separately.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#include_host ComputeRegionBackendService#include_host}

---

##### `IncludeNamedCookies`<sup>Optional</sup> <a name="IncludeNamedCookies" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy.property.includeNamedCookies"></a>

```go
IncludeNamedCookies *[]*string
```

- *Type:* *[]*string

Names of cookies to include in cache keys.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#include_named_cookies ComputeRegionBackendService#include_named_cookies}

---

##### `IncludeProtocol`<sup>Optional</sup> <a name="IncludeProtocol" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy.property.includeProtocol"></a>

```go
IncludeProtocol interface{}
```

- *Type:* interface{}

If true, http and https requests will be cached separately.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#include_protocol ComputeRegionBackendService#include_protocol}

---

##### `IncludeQueryString`<sup>Optional</sup> <a name="IncludeQueryString" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy.property.includeQueryString"></a>

```go
IncludeQueryString interface{}
```

- *Type:* interface{}

If true, include query string parameters in the cache key according to query_string_whitelist and query_string_blacklist.

If neither is set, the entire query
string will be included.

If false, the query string will be excluded from the cache
key entirely.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#include_query_string ComputeRegionBackendService#include_query_string}

---

##### `QueryStringBlacklist`<sup>Optional</sup> <a name="QueryStringBlacklist" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy.property.queryStringBlacklist"></a>

```go
QueryStringBlacklist *[]*string
```

- *Type:* *[]*string

Names of query string parameters to exclude in cache keys.

All other parameters will be included. Either specify
query_string_whitelist or query_string_blacklist, not both.
'&' and '=' will be percent encoded and not treated as
delimiters.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#query_string_blacklist ComputeRegionBackendService#query_string_blacklist}

---

##### `QueryStringWhitelist`<sup>Optional</sup> <a name="QueryStringWhitelist" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy.property.queryStringWhitelist"></a>

```go
QueryStringWhitelist *[]*string
```

- *Type:* *[]*string

Names of query string parameters to include in cache keys.

All other parameters will be excluded. Either specify
query_string_whitelist or query_string_blacklist, not both.
'&' and '=' will be percent encoded and not treated as
delimiters.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#query_string_whitelist ComputeRegionBackendService#query_string_whitelist}

---

### ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy <a name="ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregionbackendservice"

&computeregionbackendservice.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy {
	Code: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy.property.code">Code</a></code> | <code>*f64</code> | The HTTP status code to define a TTL against. |

---

##### `Code`<sup>Optional</sup> <a name="Code" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy.property.code"></a>

```go
Code *f64
```

- *Type:* *f64

The HTTP status code to define a TTL against.

Only HTTP status codes 300, 301, 308, 404, 405, 410, 421, 451 and 501
can be specified as values, and you cannot specify a status code more than once.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#code ComputeRegionBackendService#code}

---

### ComputeRegionBackendServiceCircuitBreakers <a name="ComputeRegionBackendServiceCircuitBreakers" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakers.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregionbackendservice"

&computeregionbackendservice.ComputeRegionBackendServiceCircuitBreakers {
	MaxConnections: *f64,
	MaxPendingRequests: *f64,
	MaxRequests: *f64,
	MaxRequestsPerConnection: *f64,
	MaxRetries: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakers.property.maxConnections">MaxConnections</a></code> | <code>*f64</code> | The maximum number of connections to the backend cluster. Defaults to 1024. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakers.property.maxPendingRequests">MaxPendingRequests</a></code> | <code>*f64</code> | The maximum number of pending requests to the backend cluster. Defaults to 1024. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakers.property.maxRequests">MaxRequests</a></code> | <code>*f64</code> | The maximum number of parallel requests to the backend cluster. Defaults to 1024. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakers.property.maxRequestsPerConnection">MaxRequestsPerConnection</a></code> | <code>*f64</code> | Maximum requests for a single backend connection. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakers.property.maxRetries">MaxRetries</a></code> | <code>*f64</code> | The maximum number of parallel retries to the backend cluster. Defaults to 3. |

---

##### `MaxConnections`<sup>Optional</sup> <a name="MaxConnections" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakers.property.maxConnections"></a>

```go
MaxConnections *f64
```

- *Type:* *f64

The maximum number of connections to the backend cluster. Defaults to 1024.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#max_connections ComputeRegionBackendService#max_connections}

---

##### `MaxPendingRequests`<sup>Optional</sup> <a name="MaxPendingRequests" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakers.property.maxPendingRequests"></a>

```go
MaxPendingRequests *f64
```

- *Type:* *f64

The maximum number of pending requests to the backend cluster. Defaults to 1024.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#max_pending_requests ComputeRegionBackendService#max_pending_requests}

---

##### `MaxRequests`<sup>Optional</sup> <a name="MaxRequests" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakers.property.maxRequests"></a>

```go
MaxRequests *f64
```

- *Type:* *f64

The maximum number of parallel requests to the backend cluster. Defaults to 1024.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#max_requests ComputeRegionBackendService#max_requests}

---

##### `MaxRequestsPerConnection`<sup>Optional</sup> <a name="MaxRequestsPerConnection" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakers.property.maxRequestsPerConnection"></a>

```go
MaxRequestsPerConnection *f64
```

- *Type:* *f64

Maximum requests for a single backend connection.

This parameter
is respected by both the HTTP/1.1 and HTTP/2 implementations. If
not specified, there is no limit. Setting this parameter to 1
will effectively disable keep alive.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#max_requests_per_connection ComputeRegionBackendService#max_requests_per_connection}

---

##### `MaxRetries`<sup>Optional</sup> <a name="MaxRetries" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakers.property.maxRetries"></a>

```go
MaxRetries *f64
```

- *Type:* *f64

The maximum number of parallel retries to the backend cluster. Defaults to 3.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#max_retries ComputeRegionBackendService#max_retries}

---

### ComputeRegionBackendServiceConfig <a name="ComputeRegionBackendServiceConfig" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregionbackendservice"

&computeregionbackendservice.ComputeRegionBackendServiceConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	AffinityCookieTtlSec: *f64,
	Backend: interface{},
	CdnPolicy: github.com/cdktf/cdktf-provider-google-go/google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicy,
	CircuitBreakers: github.com/cdktf/cdktf-provider-google-go/google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakers,
	ConnectionDrainingTimeoutSec: *f64,
	ConsistentHash: github.com/cdktf/cdktf-provider-google-go/google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHash,
	Description: *string,
	EnableCdn: interface{},
	FailoverPolicy: github.com/cdktf/cdktf-provider-google-go/google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicy,
	HealthChecks: *[]*string,
	Iap: github.com/cdktf/cdktf-provider-google-go/google.computeRegionBackendService.ComputeRegionBackendServiceIap,
	Id: *string,
	LoadBalancingScheme: *string,
	LocalityLbPolicy: *string,
	LogConfig: github.com/cdktf/cdktf-provider-google-go/google.computeRegionBackendService.ComputeRegionBackendServiceLogConfig,
	Network: *string,
	OutlierDetection: github.com/cdktf/cdktf-provider-google-go/google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetection,
	PortName: *string,
	Project: *string,
	Protocol: *string,
	Region: *string,
	SessionAffinity: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.computeRegionBackendService.ComputeRegionBackendServiceTimeouts,
	TimeoutSec: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.name">Name</a></code> | <code>*string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.affinityCookieTtlSec">AffinityCookieTtlSec</a></code> | <code>*f64</code> | Lifetime of cookies in seconds if session_affinity is GENERATED_COOKIE. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.backend">Backend</a></code> | <code>interface{}</code> | backend block. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.cdnPolicy">CdnPolicy</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicy">ComputeRegionBackendServiceCdnPolicy</a></code> | cdn_policy block. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.circuitBreakers">CircuitBreakers</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakers">ComputeRegionBackendServiceCircuitBreakers</a></code> | circuit_breakers block. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.connectionDrainingTimeoutSec">ConnectionDrainingTimeoutSec</a></code> | <code>*f64</code> | Time for which instance will be drained (not accept new connections, but still work to finish started). |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.consistentHash">ConsistentHash</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHash">ComputeRegionBackendServiceConsistentHash</a></code> | consistent_hash block. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.description">Description</a></code> | <code>*string</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.enableCdn">EnableCdn</a></code> | <code>interface{}</code> | If true, enable Cloud CDN for this RegionBackendService. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.failoverPolicy">FailoverPolicy</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicy">ComputeRegionBackendServiceFailoverPolicy</a></code> | failover_policy block. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.healthChecks">HealthChecks</a></code> | <code>*[]*string</code> | The set of URLs to HealthCheck resources for health checking this RegionBackendService. Currently at most one health check can be specified. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.iap">Iap</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIap">ComputeRegionBackendServiceIap</a></code> | iap block. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#id ComputeRegionBackendService#id}. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.loadBalancingScheme">LoadBalancingScheme</a></code> | <code>*string</code> | Indicates what kind of load balancing this regional backend service will be used for. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.localityLbPolicy">LocalityLbPolicy</a></code> | <code>*string</code> | The load balancing algorithm used within the scope of the locality. The possible values are:. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.logConfig">LogConfig</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfig">ComputeRegionBackendServiceLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.network">Network</a></code> | <code>*string</code> | The URL of the network to which this backend service belongs. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.outlierDetection">OutlierDetection</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetection">ComputeRegionBackendServiceOutlierDetection</a></code> | outlier_detection block. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.portName">PortName</a></code> | <code>*string</code> | A named port on a backend instance group representing the port for communication to the backend VMs in that group. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#project ComputeRegionBackendService#project}. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.protocol">Protocol</a></code> | <code>*string</code> | The protocol this RegionBackendService uses to communicate with backends. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.region">Region</a></code> | <code>*string</code> | The Region in which the created backend service should reside. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.sessionAffinity">SessionAffinity</a></code> | <code>*string</code> | Type of session affinity to use. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeouts">ComputeRegionBackendServiceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.timeoutSec">TimeoutSec</a></code> | <code>*f64</code> | How many seconds to wait for the backend before considering it a failed request. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#name ComputeRegionBackendService#name}

---

##### `AffinityCookieTtlSec`<sup>Optional</sup> <a name="AffinityCookieTtlSec" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.affinityCookieTtlSec"></a>

```go
AffinityCookieTtlSec *f64
```

- *Type:* *f64

Lifetime of cookies in seconds if session_affinity is GENERATED_COOKIE.

If set to 0, the cookie is non-persistent and lasts
only until the end of the browser session (or equivalent). The
maximum allowed value for TTL is one day.

When the load balancing scheme is INTERNAL, this field is not used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#affinity_cookie_ttl_sec ComputeRegionBackendService#affinity_cookie_ttl_sec}

---

##### `Backend`<sup>Optional</sup> <a name="Backend" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.backend"></a>

```go
Backend interface{}
```

- *Type:* interface{}

backend block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#backend ComputeRegionBackendService#backend}

---

##### `CdnPolicy`<sup>Optional</sup> <a name="CdnPolicy" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.cdnPolicy"></a>

```go
CdnPolicy ComputeRegionBackendServiceCdnPolicy
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicy">ComputeRegionBackendServiceCdnPolicy</a>

cdn_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#cdn_policy ComputeRegionBackendService#cdn_policy}

---

##### `CircuitBreakers`<sup>Optional</sup> <a name="CircuitBreakers" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.circuitBreakers"></a>

```go
CircuitBreakers ComputeRegionBackendServiceCircuitBreakers
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakers">ComputeRegionBackendServiceCircuitBreakers</a>

circuit_breakers block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#circuit_breakers ComputeRegionBackendService#circuit_breakers}

---

##### `ConnectionDrainingTimeoutSec`<sup>Optional</sup> <a name="ConnectionDrainingTimeoutSec" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.connectionDrainingTimeoutSec"></a>

```go
ConnectionDrainingTimeoutSec *f64
```

- *Type:* *f64

Time for which instance will be drained (not accept new connections, but still work to finish started).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#connection_draining_timeout_sec ComputeRegionBackendService#connection_draining_timeout_sec}

---

##### `ConsistentHash`<sup>Optional</sup> <a name="ConsistentHash" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.consistentHash"></a>

```go
ConsistentHash ComputeRegionBackendServiceConsistentHash
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHash">ComputeRegionBackendServiceConsistentHash</a>

consistent_hash block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#consistent_hash ComputeRegionBackendService#consistent_hash}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of this resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#description ComputeRegionBackendService#description}

---

##### `EnableCdn`<sup>Optional</sup> <a name="EnableCdn" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.enableCdn"></a>

```go
EnableCdn interface{}
```

- *Type:* interface{}

If true, enable Cloud CDN for this RegionBackendService.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#enable_cdn ComputeRegionBackendService#enable_cdn}

---

##### `FailoverPolicy`<sup>Optional</sup> <a name="FailoverPolicy" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.failoverPolicy"></a>

```go
FailoverPolicy ComputeRegionBackendServiceFailoverPolicy
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicy">ComputeRegionBackendServiceFailoverPolicy</a>

failover_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#failover_policy ComputeRegionBackendService#failover_policy}

---

##### `HealthChecks`<sup>Optional</sup> <a name="HealthChecks" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.healthChecks"></a>

```go
HealthChecks *[]*string
```

- *Type:* *[]*string

The set of URLs to HealthCheck resources for health checking this RegionBackendService. Currently at most one health check can be specified.

A health check must be specified unless the backend service uses an internet
or serverless NEG as a backend.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#health_checks ComputeRegionBackendService#health_checks}

---

##### `Iap`<sup>Optional</sup> <a name="Iap" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.iap"></a>

```go
Iap ComputeRegionBackendServiceIap
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIap">ComputeRegionBackendServiceIap</a>

iap block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#iap ComputeRegionBackendService#iap}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#id ComputeRegionBackendService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LoadBalancingScheme`<sup>Optional</sup> <a name="LoadBalancingScheme" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.loadBalancingScheme"></a>

```go
LoadBalancingScheme *string
```

- *Type:* *string

Indicates what kind of load balancing this regional backend service will be used for.

A backend service created for one type of load
balancing cannot be used with the other(s). For more information, refer to
[Choosing a load balancer](https://cloud.google.com/load-balancing/docs/backend-service). Default value: "INTERNAL" Possible values: ["EXTERNAL", "EXTERNAL_MANAGED", "INTERNAL", "INTERNAL_MANAGED"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#load_balancing_scheme ComputeRegionBackendService#load_balancing_scheme}

---

##### `LocalityLbPolicy`<sup>Optional</sup> <a name="LocalityLbPolicy" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.localityLbPolicy"></a>

```go
LocalityLbPolicy *string
```

- *Type:* *string

The load balancing algorithm used within the scope of the locality. The possible values are:.

'ROUND_ROBIN': This is a simple policy in which each healthy backend
is selected in round robin order.

'LEAST_REQUEST': An O(1) algorithm which selects two random healthy
hosts and picks the host which has fewer active requests.

'RING_HASH': The ring/modulo hash load balancer implements consistent
hashing to backends. The algorithm has the property that the
addition/removal of a host from a set of N hosts only affects
1/N of the requests.

'RANDOM': The load balancer selects a random healthy host.

'ORIGINAL_DESTINATION': Backend host is selected based on the client
connection metadata, i.e., connections are opened
to the same address as the destination address of
the incoming connection before the connection
was redirected to the load balancer.

'MAGLEV': used as a drop in replacement for the ring hash load balancer.
Maglev is not as stable as ring hash but has faster table lookup
build times and host selection times. For more information about
Maglev, refer to https://ai.google/research/pubs/pub44824

'WEIGHTED_MAGLEV': Per-instance weighted Load Balancing via health check
reported weights. If set, the Backend Service must
configure a non legacy HTTP-based Health Check, and
health check replies are expected to contain
non-standard HTTP response header field
X-Load-Balancing-Endpoint-Weight to specify the
per-instance weights. If set, Load Balancing is weight
based on the per-instance weights reported in the last
processed health check replies, as long as every
instance either reported a valid weight or had
UNAVAILABLE_WEIGHT. Otherwise, Load Balancing remains
equal-weight.

This field is applicable to either:

A regional backend service with the service_protocol set to HTTP, HTTPS, or HTTP2,
and loadBalancingScheme set to INTERNAL_MANAGED.
A global backend service with the load_balancing_scheme set to INTERNAL_SELF_MANAGED.
A regional backend service with loadBalancingScheme set to EXTERNAL (External Network
Load Balancing). Only MAGLEV and WEIGHTED_MAGLEV values are possible for External
Network Load Balancing. The default is MAGLEV.

If session_affinity is not NONE, and this field is not set to MAGLEV, WEIGHTED_MAGLEV,
or RING_HASH, session affinity settings will not take effect.

Only ROUND_ROBIN and RING_HASH are supported when the backend service is referenced
by a URL map that is bound to target gRPC proxy that has validate_for_proxyless
field set to true. Possible values: ["ROUND_ROBIN", "LEAST_REQUEST", "RING_HASH", "RANDOM", "ORIGINAL_DESTINATION", "MAGLEV", "WEIGHTED_MAGLEV"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#locality_lb_policy ComputeRegionBackendService#locality_lb_policy}

---

##### `LogConfig`<sup>Optional</sup> <a name="LogConfig" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.logConfig"></a>

```go
LogConfig ComputeRegionBackendServiceLogConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfig">ComputeRegionBackendServiceLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#log_config ComputeRegionBackendService#log_config}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.network"></a>

```go
Network *string
```

- *Type:* *string

The URL of the network to which this backend service belongs.

This field can only be specified when the load balancing scheme is set to INTERNAL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#network ComputeRegionBackendService#network}

---

##### `OutlierDetection`<sup>Optional</sup> <a name="OutlierDetection" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.outlierDetection"></a>

```go
OutlierDetection ComputeRegionBackendServiceOutlierDetection
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetection">ComputeRegionBackendServiceOutlierDetection</a>

outlier_detection block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#outlier_detection ComputeRegionBackendService#outlier_detection}

---

##### `PortName`<sup>Optional</sup> <a name="PortName" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.portName"></a>

```go
PortName *string
```

- *Type:* *string

A named port on a backend instance group representing the port for communication to the backend VMs in that group.

Required when the
loadBalancingScheme is EXTERNAL, EXTERNAL_MANAGED, INTERNAL_MANAGED, or INTERNAL_SELF_MANAGED
and the backends are instance groups. The named port must be defined on each
backend instance group. This parameter has no meaning if the backends are NEGs. API sets a
default of "http" if not given.
Must be omitted when the loadBalancingScheme is INTERNAL (Internal TCP/UDP Load Balancing).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#port_name ComputeRegionBackendService#port_name}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#project ComputeRegionBackendService#project}.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

The protocol this RegionBackendService uses to communicate with backends.

The default is HTTP. **NOTE**: HTTP2 is only valid for beta HTTP/2 load balancer
types and may result in errors if used with the GA API. Possible values: ["HTTP", "HTTPS", "HTTP2", "SSL", "TCP", "UDP", "GRPC", "UNSPECIFIED"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#protocol ComputeRegionBackendService#protocol}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

The Region in which the created backend service should reside. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#region ComputeRegionBackendService#region}

---

##### `SessionAffinity`<sup>Optional</sup> <a name="SessionAffinity" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.sessionAffinity"></a>

```go
SessionAffinity *string
```

- *Type:* *string

Type of session affinity to use.

The default is NONE. Session affinity is
not applicable if the protocol is UDP. Possible values: ["NONE", "CLIENT_IP", "CLIENT_IP_PORT_PROTO", "CLIENT_IP_PROTO", "GENERATED_COOKIE", "HEADER_FIELD", "HTTP_COOKIE", "CLIENT_IP_NO_DESTINATION"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#session_affinity ComputeRegionBackendService#session_affinity}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.timeouts"></a>

```go
Timeouts ComputeRegionBackendServiceTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeouts">ComputeRegionBackendServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#timeouts ComputeRegionBackendService#timeouts}

---

##### `TimeoutSec`<sup>Optional</sup> <a name="TimeoutSec" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.timeoutSec"></a>

```go
TimeoutSec *f64
```

- *Type:* *f64

How many seconds to wait for the backend before considering it a failed request.

Default is 30 seconds. Valid range is [1, 86400].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#timeout_sec ComputeRegionBackendService#timeout_sec}

---

### ComputeRegionBackendServiceConsistentHash <a name="ComputeRegionBackendServiceConsistentHash" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHash"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHash.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregionbackendservice"

&computeregionbackendservice.ComputeRegionBackendServiceConsistentHash {
	HttpCookie: github.com/cdktf/cdktf-provider-google-go/google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookie,
	HttpHeaderName: *string,
	MinimumRingSize: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHash.property.httpCookie">HttpCookie</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookie">ComputeRegionBackendServiceConsistentHashHttpCookie</a></code> | http_cookie block. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHash.property.httpHeaderName">HttpHeaderName</a></code> | <code>*string</code> | The hash based on the value of the specified header field. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHash.property.minimumRingSize">MinimumRingSize</a></code> | <code>*f64</code> | The minimum number of virtual nodes to use for the hash ring. |

---

##### `HttpCookie`<sup>Optional</sup> <a name="HttpCookie" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHash.property.httpCookie"></a>

```go
HttpCookie ComputeRegionBackendServiceConsistentHashHttpCookie
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookie">ComputeRegionBackendServiceConsistentHashHttpCookie</a>

http_cookie block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#http_cookie ComputeRegionBackendService#http_cookie}

---

##### `HttpHeaderName`<sup>Optional</sup> <a name="HttpHeaderName" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHash.property.httpHeaderName"></a>

```go
HttpHeaderName *string
```

- *Type:* *string

The hash based on the value of the specified header field.

This field is applicable if the sessionAffinity is set to HEADER_FIELD.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#http_header_name ComputeRegionBackendService#http_header_name}

---

##### `MinimumRingSize`<sup>Optional</sup> <a name="MinimumRingSize" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHash.property.minimumRingSize"></a>

```go
MinimumRingSize *f64
```

- *Type:* *f64

The minimum number of virtual nodes to use for the hash ring.

Larger ring sizes result in more granular load
distributions. If the number of hosts in the load balancing pool
is larger than the ring size, each host will be assigned a single
virtual node.
Defaults to 1024.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#minimum_ring_size ComputeRegionBackendService#minimum_ring_size}

---

### ComputeRegionBackendServiceConsistentHashHttpCookie <a name="ComputeRegionBackendServiceConsistentHashHttpCookie" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookie"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookie.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregionbackendservice"

&computeregionbackendservice.ComputeRegionBackendServiceConsistentHashHttpCookie {
	Name: *string,
	Path: *string,
	Ttl: github.com/cdktf/cdktf-provider-google-go/google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtl,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookie.property.name">Name</a></code> | <code>*string</code> | Name of the cookie. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookie.property.path">Path</a></code> | <code>*string</code> | Path to set for the cookie. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookie.property.ttl">Ttl</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtl">ComputeRegionBackendServiceConsistentHashHttpCookieTtl</a></code> | ttl block. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookie.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the cookie.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#name ComputeRegionBackendService#name}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookie.property.path"></a>

```go
Path *string
```

- *Type:* *string

Path to set for the cookie.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#path ComputeRegionBackendService#path}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookie.property.ttl"></a>

```go
Ttl ComputeRegionBackendServiceConsistentHashHttpCookieTtl
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtl">ComputeRegionBackendServiceConsistentHashHttpCookieTtl</a>

ttl block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#ttl ComputeRegionBackendService#ttl}

---

### ComputeRegionBackendServiceConsistentHashHttpCookieTtl <a name="ComputeRegionBackendServiceConsistentHashHttpCookieTtl" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtl.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregionbackendservice"

&computeregionbackendservice.ComputeRegionBackendServiceConsistentHashHttpCookieTtl {
	Seconds: *f64,
	Nanos: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtl.property.seconds">Seconds</a></code> | <code>*f64</code> | Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtl.property.nanos">Nanos</a></code> | <code>*f64</code> | Span of time that's a fraction of a second at nanosecond resolution. |

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtl.property.seconds"></a>

```go
Seconds *f64
```

- *Type:* *f64

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#seconds ComputeRegionBackendService#seconds}

---

##### `Nanos`<sup>Optional</sup> <a name="Nanos" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtl.property.nanos"></a>

```go
Nanos *f64
```

- *Type:* *f64

Span of time that's a fraction of a second at nanosecond resolution.

Durations less than one second are represented
with a 0 seconds field and a positive nanos field. Must
be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#nanos ComputeRegionBackendService#nanos}

---

### ComputeRegionBackendServiceFailoverPolicy <a name="ComputeRegionBackendServiceFailoverPolicy" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregionbackendservice"

&computeregionbackendservice.ComputeRegionBackendServiceFailoverPolicy {
	DisableConnectionDrainOnFailover: interface{},
	DropTrafficIfUnhealthy: interface{},
	FailoverRatio: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicy.property.disableConnectionDrainOnFailover">DisableConnectionDrainOnFailover</a></code> | <code>interface{}</code> | On failover or failback, this field indicates whether connection drain will be honored. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicy.property.dropTrafficIfUnhealthy">DropTrafficIfUnhealthy</a></code> | <code>interface{}</code> | This option is used only when no healthy VMs are detected in the primary and backup instance groups. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicy.property.failoverRatio">FailoverRatio</a></code> | <code>*f64</code> | The value of the field must be in [0, 1]. |

---

##### `DisableConnectionDrainOnFailover`<sup>Optional</sup> <a name="DisableConnectionDrainOnFailover" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicy.property.disableConnectionDrainOnFailover"></a>

```go
DisableConnectionDrainOnFailover interface{}
```

- *Type:* interface{}

On failover or failback, this field indicates whether connection drain will be honored.

Setting this to true has the following effect: connections
to the old active pool are not drained. Connections to the new active pool
use the timeout of 10 min (currently fixed). Setting to false has the
following effect: both old and new connections will have a drain timeout
of 10 min.
This can be set to true only if the protocol is TCP.
The default is false.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#disable_connection_drain_on_failover ComputeRegionBackendService#disable_connection_drain_on_failover}

---

##### `DropTrafficIfUnhealthy`<sup>Optional</sup> <a name="DropTrafficIfUnhealthy" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicy.property.dropTrafficIfUnhealthy"></a>

```go
DropTrafficIfUnhealthy interface{}
```

- *Type:* interface{}

This option is used only when no healthy VMs are detected in the primary and backup instance groups.

When set to true, traffic is dropped. When
set to false, new connections are sent across all VMs in the primary group.
The default is false.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#drop_traffic_if_unhealthy ComputeRegionBackendService#drop_traffic_if_unhealthy}

---

##### `FailoverRatio`<sup>Optional</sup> <a name="FailoverRatio" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicy.property.failoverRatio"></a>

```go
FailoverRatio *f64
```

- *Type:* *f64

The value of the field must be in [0, 1].

If the ratio of the healthy
VMs in the primary backend is at or below this number, traffic arriving
at the load-balanced IP will be directed to the failover backend.
In case where 'failoverRatio' is not set or all the VMs in the backup
backend are unhealthy, the traffic will be directed back to the primary
backend in the "force" mode, where traffic will be spread to the healthy
VMs with the best effort, or to all VMs when no VM is healthy.
This field is only used with l4 load balancing.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#failover_ratio ComputeRegionBackendService#failover_ratio}

---

### ComputeRegionBackendServiceIap <a name="ComputeRegionBackendServiceIap" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIap"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIap.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregionbackendservice"

&computeregionbackendservice.ComputeRegionBackendServiceIap {
	Oauth2ClientId: *string,
	Oauth2ClientSecret: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIap.property.oauth2ClientId">Oauth2ClientId</a></code> | <code>*string</code> | OAuth2 Client ID for IAP. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIap.property.oauth2ClientSecret">Oauth2ClientSecret</a></code> | <code>*string</code> | OAuth2 Client Secret for IAP. |

---

##### `Oauth2ClientId`<sup>Required</sup> <a name="Oauth2ClientId" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIap.property.oauth2ClientId"></a>

```go
Oauth2ClientId *string
```

- *Type:* *string

OAuth2 Client ID for IAP.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#oauth2_client_id ComputeRegionBackendService#oauth2_client_id}

---

##### `Oauth2ClientSecret`<sup>Required</sup> <a name="Oauth2ClientSecret" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIap.property.oauth2ClientSecret"></a>

```go
Oauth2ClientSecret *string
```

- *Type:* *string

OAuth2 Client Secret for IAP.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#oauth2_client_secret ComputeRegionBackendService#oauth2_client_secret}

---

### ComputeRegionBackendServiceLogConfig <a name="ComputeRegionBackendServiceLogConfig" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregionbackendservice"

&computeregionbackendservice.ComputeRegionBackendServiceLogConfig {
	Enable: interface{},
	SampleRate: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfig.property.enable">Enable</a></code> | <code>interface{}</code> | Whether to enable logging for the load balancer traffic served by this backend service. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfig.property.sampleRate">SampleRate</a></code> | <code>*f64</code> | This field can only be specified if logging is enabled for this backend service. |

---

##### `Enable`<sup>Optional</sup> <a name="Enable" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfig.property.enable"></a>

```go
Enable interface{}
```

- *Type:* interface{}

Whether to enable logging for the load balancer traffic served by this backend service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#enable ComputeRegionBackendService#enable}

---

##### `SampleRate`<sup>Optional</sup> <a name="SampleRate" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfig.property.sampleRate"></a>

```go
SampleRate *f64
```

- *Type:* *f64

This field can only be specified if logging is enabled for this backend service.

The value of
the field must be in [0, 1]. This configures the sampling rate of requests to the load balancer
where 1.0 means all logged requests are reported and 0.0 means no logged requests are reported.
The default value is 1.0.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#sample_rate ComputeRegionBackendService#sample_rate}

---

### ComputeRegionBackendServiceOutlierDetection <a name="ComputeRegionBackendServiceOutlierDetection" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetection.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregionbackendservice"

&computeregionbackendservice.ComputeRegionBackendServiceOutlierDetection {
	BaseEjectionTime: github.com/cdktf/cdktf-provider-google-go/google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTime,
	ConsecutiveErrors: *f64,
	ConsecutiveGatewayFailure: *f64,
	EnforcingConsecutiveErrors: *f64,
	EnforcingConsecutiveGatewayFailure: *f64,
	EnforcingSuccessRate: *f64,
	Interval: github.com/cdktf/cdktf-provider-google-go/google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionInterval,
	MaxEjectionPercent: *f64,
	SuccessRateMinimumHosts: *f64,
	SuccessRateRequestVolume: *f64,
	SuccessRateStdevFactor: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetection.property.baseEjectionTime">BaseEjectionTime</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTime">ComputeRegionBackendServiceOutlierDetectionBaseEjectionTime</a></code> | base_ejection_time block. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetection.property.consecutiveErrors">ConsecutiveErrors</a></code> | <code>*f64</code> | Number of errors before a host is ejected from the connection pool. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetection.property.consecutiveGatewayFailure">ConsecutiveGatewayFailure</a></code> | <code>*f64</code> | The number of consecutive gateway failures (502, 503, 504 status or connection errors that are mapped to one of those status codes) before a consecutive gateway failure ejection occurs. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetection.property.enforcingConsecutiveErrors">EnforcingConsecutiveErrors</a></code> | <code>*f64</code> | The percentage chance that a host will be actually ejected when an outlier status is detected through consecutive 5xx. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetection.property.enforcingConsecutiveGatewayFailure">EnforcingConsecutiveGatewayFailure</a></code> | <code>*f64</code> | The percentage chance that a host will be actually ejected when an outlier status is detected through consecutive gateway failures. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetection.property.enforcingSuccessRate">EnforcingSuccessRate</a></code> | <code>*f64</code> | The percentage chance that a host will be actually ejected when an outlier status is detected through success rate statistics. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetection.property.interval">Interval</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionInterval">ComputeRegionBackendServiceOutlierDetectionInterval</a></code> | interval block. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetection.property.maxEjectionPercent">MaxEjectionPercent</a></code> | <code>*f64</code> | Maximum percentage of hosts in the load balancing pool for the backend service that can be ejected. Defaults to 10%. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetection.property.successRateMinimumHosts">SuccessRateMinimumHosts</a></code> | <code>*f64</code> | The number of hosts in a cluster that must have enough request volume to detect success rate outliers. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetection.property.successRateRequestVolume">SuccessRateRequestVolume</a></code> | <code>*f64</code> | The minimum number of total requests that must be collected in one interval (as defined by the interval duration above) to include this host in success rate based outlier detection. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetection.property.successRateStdevFactor">SuccessRateStdevFactor</a></code> | <code>*f64</code> | This factor is used to determine the ejection threshold for success rate outlier ejection. |

---

##### `BaseEjectionTime`<sup>Optional</sup> <a name="BaseEjectionTime" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetection.property.baseEjectionTime"></a>

```go
BaseEjectionTime ComputeRegionBackendServiceOutlierDetectionBaseEjectionTime
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTime">ComputeRegionBackendServiceOutlierDetectionBaseEjectionTime</a>

base_ejection_time block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#base_ejection_time ComputeRegionBackendService#base_ejection_time}

---

##### `ConsecutiveErrors`<sup>Optional</sup> <a name="ConsecutiveErrors" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetection.property.consecutiveErrors"></a>

```go
ConsecutiveErrors *f64
```

- *Type:* *f64

Number of errors before a host is ejected from the connection pool.

When the
backend host is accessed over HTTP, a 5xx return code qualifies as an error.
Defaults to 5.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#consecutive_errors ComputeRegionBackendService#consecutive_errors}

---

##### `ConsecutiveGatewayFailure`<sup>Optional</sup> <a name="ConsecutiveGatewayFailure" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetection.property.consecutiveGatewayFailure"></a>

```go
ConsecutiveGatewayFailure *f64
```

- *Type:* *f64

The number of consecutive gateway failures (502, 503, 504 status or connection errors that are mapped to one of those status codes) before a consecutive gateway failure ejection occurs.

Defaults to 5.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#consecutive_gateway_failure ComputeRegionBackendService#consecutive_gateway_failure}

---

##### `EnforcingConsecutiveErrors`<sup>Optional</sup> <a name="EnforcingConsecutiveErrors" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetection.property.enforcingConsecutiveErrors"></a>

```go
EnforcingConsecutiveErrors *f64
```

- *Type:* *f64

The percentage chance that a host will be actually ejected when an outlier status is detected through consecutive 5xx.

This setting can be used to disable
ejection or to ramp it up slowly. Defaults to 100.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#enforcing_consecutive_errors ComputeRegionBackendService#enforcing_consecutive_errors}

---

##### `EnforcingConsecutiveGatewayFailure`<sup>Optional</sup> <a name="EnforcingConsecutiveGatewayFailure" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetection.property.enforcingConsecutiveGatewayFailure"></a>

```go
EnforcingConsecutiveGatewayFailure *f64
```

- *Type:* *f64

The percentage chance that a host will be actually ejected when an outlier status is detected through consecutive gateway failures.

This setting can be
used to disable ejection or to ramp it up slowly. Defaults to 0.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#enforcing_consecutive_gateway_failure ComputeRegionBackendService#enforcing_consecutive_gateway_failure}

---

##### `EnforcingSuccessRate`<sup>Optional</sup> <a name="EnforcingSuccessRate" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetection.property.enforcingSuccessRate"></a>

```go
EnforcingSuccessRate *f64
```

- *Type:* *f64

The percentage chance that a host will be actually ejected when an outlier status is detected through success rate statistics.

This setting can be used to
disable ejection or to ramp it up slowly. Defaults to 100.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#enforcing_success_rate ComputeRegionBackendService#enforcing_success_rate}

---

##### `Interval`<sup>Optional</sup> <a name="Interval" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetection.property.interval"></a>

```go
Interval ComputeRegionBackendServiceOutlierDetectionInterval
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionInterval">ComputeRegionBackendServiceOutlierDetectionInterval</a>

interval block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#interval ComputeRegionBackendService#interval}

---

##### `MaxEjectionPercent`<sup>Optional</sup> <a name="MaxEjectionPercent" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetection.property.maxEjectionPercent"></a>

```go
MaxEjectionPercent *f64
```

- *Type:* *f64

Maximum percentage of hosts in the load balancing pool for the backend service that can be ejected. Defaults to 10%.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#max_ejection_percent ComputeRegionBackendService#max_ejection_percent}

---

##### `SuccessRateMinimumHosts`<sup>Optional</sup> <a name="SuccessRateMinimumHosts" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetection.property.successRateMinimumHosts"></a>

```go
SuccessRateMinimumHosts *f64
```

- *Type:* *f64

The number of hosts in a cluster that must have enough request volume to detect success rate outliers.

If the number of hosts is less than this setting, outlier
detection via success rate statistics is not performed for any host in the
cluster. Defaults to 5.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#success_rate_minimum_hosts ComputeRegionBackendService#success_rate_minimum_hosts}

---

##### `SuccessRateRequestVolume`<sup>Optional</sup> <a name="SuccessRateRequestVolume" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetection.property.successRateRequestVolume"></a>

```go
SuccessRateRequestVolume *f64
```

- *Type:* *f64

The minimum number of total requests that must be collected in one interval (as defined by the interval duration above) to include this host in success rate based outlier detection.

If the volume is lower than this setting, outlier
detection via success rate statistics is not performed for that host. Defaults
to 100.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#success_rate_request_volume ComputeRegionBackendService#success_rate_request_volume}

---

##### `SuccessRateStdevFactor`<sup>Optional</sup> <a name="SuccessRateStdevFactor" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetection.property.successRateStdevFactor"></a>

```go
SuccessRateStdevFactor *f64
```

- *Type:* *f64

This factor is used to determine the ejection threshold for success rate outlier ejection.

The ejection threshold is the difference between the mean success
rate, and the product of this factor and the standard deviation of the mean
success rate: mean - (stdev * success_rate_stdev_factor). This factor is divided
by a thousand to get a double. That is, if the desired factor is 1.9, the
runtime value should be 1900. Defaults to 1900.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#success_rate_stdev_factor ComputeRegionBackendService#success_rate_stdev_factor}

---

### ComputeRegionBackendServiceOutlierDetectionBaseEjectionTime <a name="ComputeRegionBackendServiceOutlierDetectionBaseEjectionTime" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTime.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregionbackendservice"

&computeregionbackendservice.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTime {
	Seconds: *f64,
	Nanos: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTime.property.seconds">Seconds</a></code> | <code>*f64</code> | Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTime.property.nanos">Nanos</a></code> | <code>*f64</code> | Span of time that's a fraction of a second at nanosecond resolution. |

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTime.property.seconds"></a>

```go
Seconds *f64
```

- *Type:* *f64

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#seconds ComputeRegionBackendService#seconds}

---

##### `Nanos`<sup>Optional</sup> <a name="Nanos" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTime.property.nanos"></a>

```go
Nanos *f64
```

- *Type:* *f64

Span of time that's a fraction of a second at nanosecond resolution.

Durations
less than one second are represented with a 0 'seconds' field and a positive
'nanos' field. Must be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#nanos ComputeRegionBackendService#nanos}

---

### ComputeRegionBackendServiceOutlierDetectionInterval <a name="ComputeRegionBackendServiceOutlierDetectionInterval" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionInterval"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionInterval.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregionbackendservice"

&computeregionbackendservice.ComputeRegionBackendServiceOutlierDetectionInterval {
	Seconds: *f64,
	Nanos: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionInterval.property.seconds">Seconds</a></code> | <code>*f64</code> | Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionInterval.property.nanos">Nanos</a></code> | <code>*f64</code> | Span of time that's a fraction of a second at nanosecond resolution. |

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionInterval.property.seconds"></a>

```go
Seconds *f64
```

- *Type:* *f64

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#seconds ComputeRegionBackendService#seconds}

---

##### `Nanos`<sup>Optional</sup> <a name="Nanos" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionInterval.property.nanos"></a>

```go
Nanos *f64
```

- *Type:* *f64

Span of time that's a fraction of a second at nanosecond resolution.

Durations
less than one second are represented with a 0 'seconds' field and a positive
'nanos' field. Must be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#nanos ComputeRegionBackendService#nanos}

---

### ComputeRegionBackendServiceTimeouts <a name="ComputeRegionBackendServiceTimeouts" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregionbackendservice"

&computeregionbackendservice.ComputeRegionBackendServiceTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#create ComputeRegionBackendService#create}. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#delete ComputeRegionBackendService#delete}. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#update ComputeRegionBackendService#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#create ComputeRegionBackendService#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#delete ComputeRegionBackendService#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_backend_service#update ComputeRegionBackendService#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRegionBackendServiceBackendList <a name="ComputeRegionBackendServiceBackendList" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregionbackendservice"

computeregionbackendservice.NewComputeRegionBackendServiceBackendList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeRegionBackendServiceBackendList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendList.get"></a>

```go
func Get(index *f64) ComputeRegionBackendServiceBackendOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeRegionBackendServiceBackendOutputReference <a name="ComputeRegionBackendServiceBackendOutputReference" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregionbackendservice"

computeregionbackendservice.NewComputeRegionBackendServiceBackendOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeRegionBackendServiceBackendOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.resetBalancingMode">ResetBalancingMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.resetCapacityScaler">ResetCapacityScaler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.resetFailover">ResetFailover</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.resetMaxConnections">ResetMaxConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.resetMaxConnectionsPerEndpoint">ResetMaxConnectionsPerEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.resetMaxConnectionsPerInstance">ResetMaxConnectionsPerInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.resetMaxRate">ResetMaxRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.resetMaxRatePerEndpoint">ResetMaxRatePerEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.resetMaxRatePerInstance">ResetMaxRatePerInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.resetMaxUtilization">ResetMaxUtilization</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBalancingMode` <a name="ResetBalancingMode" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.resetBalancingMode"></a>

```go
func ResetBalancingMode()
```

##### `ResetCapacityScaler` <a name="ResetCapacityScaler" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.resetCapacityScaler"></a>

```go
func ResetCapacityScaler()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetFailover` <a name="ResetFailover" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.resetFailover"></a>

```go
func ResetFailover()
```

##### `ResetMaxConnections` <a name="ResetMaxConnections" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.resetMaxConnections"></a>

```go
func ResetMaxConnections()
```

##### `ResetMaxConnectionsPerEndpoint` <a name="ResetMaxConnectionsPerEndpoint" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.resetMaxConnectionsPerEndpoint"></a>

```go
func ResetMaxConnectionsPerEndpoint()
```

##### `ResetMaxConnectionsPerInstance` <a name="ResetMaxConnectionsPerInstance" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.resetMaxConnectionsPerInstance"></a>

```go
func ResetMaxConnectionsPerInstance()
```

##### `ResetMaxRate` <a name="ResetMaxRate" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.resetMaxRate"></a>

```go
func ResetMaxRate()
```

##### `ResetMaxRatePerEndpoint` <a name="ResetMaxRatePerEndpoint" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.resetMaxRatePerEndpoint"></a>

```go
func ResetMaxRatePerEndpoint()
```

##### `ResetMaxRatePerInstance` <a name="ResetMaxRatePerInstance" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.resetMaxRatePerInstance"></a>

```go
func ResetMaxRatePerInstance()
```

##### `ResetMaxUtilization` <a name="ResetMaxUtilization" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.resetMaxUtilization"></a>

```go
func ResetMaxUtilization()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.balancingModeInput">BalancingModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.capacityScalerInput">CapacityScalerInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.failoverInput">FailoverInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.groupInput">GroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.maxConnectionsInput">MaxConnectionsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.maxConnectionsPerEndpointInput">MaxConnectionsPerEndpointInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.maxConnectionsPerInstanceInput">MaxConnectionsPerInstanceInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.maxRateInput">MaxRateInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.maxRatePerEndpointInput">MaxRatePerEndpointInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.maxRatePerInstanceInput">MaxRatePerInstanceInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.maxUtilizationInput">MaxUtilizationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.balancingMode">BalancingMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.capacityScaler">CapacityScaler</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.failover">Failover</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.group">Group</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.maxConnections">MaxConnections</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.maxConnectionsPerEndpoint">MaxConnectionsPerEndpoint</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.maxConnectionsPerInstance">MaxConnectionsPerInstance</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.maxRate">MaxRate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.maxRatePerEndpoint">MaxRatePerEndpoint</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.maxRatePerInstance">MaxRatePerInstance</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.maxUtilization">MaxUtilization</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BalancingModeInput`<sup>Optional</sup> <a name="BalancingModeInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.balancingModeInput"></a>

```go
func BalancingModeInput() *string
```

- *Type:* *string

---

##### `CapacityScalerInput`<sup>Optional</sup> <a name="CapacityScalerInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.capacityScalerInput"></a>

```go
func CapacityScalerInput() *f64
```

- *Type:* *f64

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FailoverInput`<sup>Optional</sup> <a name="FailoverInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.failoverInput"></a>

```go
func FailoverInput() interface{}
```

- *Type:* interface{}

---

##### `GroupInput`<sup>Optional</sup> <a name="GroupInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.groupInput"></a>

```go
func GroupInput() *string
```

- *Type:* *string

---

##### `MaxConnectionsInput`<sup>Optional</sup> <a name="MaxConnectionsInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.maxConnectionsInput"></a>

```go
func MaxConnectionsInput() *f64
```

- *Type:* *f64

---

##### `MaxConnectionsPerEndpointInput`<sup>Optional</sup> <a name="MaxConnectionsPerEndpointInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.maxConnectionsPerEndpointInput"></a>

```go
func MaxConnectionsPerEndpointInput() *f64
```

- *Type:* *f64

---

##### `MaxConnectionsPerInstanceInput`<sup>Optional</sup> <a name="MaxConnectionsPerInstanceInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.maxConnectionsPerInstanceInput"></a>

```go
func MaxConnectionsPerInstanceInput() *f64
```

- *Type:* *f64

---

##### `MaxRateInput`<sup>Optional</sup> <a name="MaxRateInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.maxRateInput"></a>

```go
func MaxRateInput() *f64
```

- *Type:* *f64

---

##### `MaxRatePerEndpointInput`<sup>Optional</sup> <a name="MaxRatePerEndpointInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.maxRatePerEndpointInput"></a>

```go
func MaxRatePerEndpointInput() *f64
```

- *Type:* *f64

---

##### `MaxRatePerInstanceInput`<sup>Optional</sup> <a name="MaxRatePerInstanceInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.maxRatePerInstanceInput"></a>

```go
func MaxRatePerInstanceInput() *f64
```

- *Type:* *f64

---

##### `MaxUtilizationInput`<sup>Optional</sup> <a name="MaxUtilizationInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.maxUtilizationInput"></a>

```go
func MaxUtilizationInput() *f64
```

- *Type:* *f64

---

##### `BalancingMode`<sup>Required</sup> <a name="BalancingMode" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.balancingMode"></a>

```go
func BalancingMode() *string
```

- *Type:* *string

---

##### `CapacityScaler`<sup>Required</sup> <a name="CapacityScaler" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.capacityScaler"></a>

```go
func CapacityScaler() *f64
```

- *Type:* *f64

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Failover`<sup>Required</sup> <a name="Failover" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.failover"></a>

```go
func Failover() interface{}
```

- *Type:* interface{}

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.group"></a>

```go
func Group() *string
```

- *Type:* *string

---

##### `MaxConnections`<sup>Required</sup> <a name="MaxConnections" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.maxConnections"></a>

```go
func MaxConnections() *f64
```

- *Type:* *f64

---

##### `MaxConnectionsPerEndpoint`<sup>Required</sup> <a name="MaxConnectionsPerEndpoint" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.maxConnectionsPerEndpoint"></a>

```go
func MaxConnectionsPerEndpoint() *f64
```

- *Type:* *f64

---

##### `MaxConnectionsPerInstance`<sup>Required</sup> <a name="MaxConnectionsPerInstance" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.maxConnectionsPerInstance"></a>

```go
func MaxConnectionsPerInstance() *f64
```

- *Type:* *f64

---

##### `MaxRate`<sup>Required</sup> <a name="MaxRate" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.maxRate"></a>

```go
func MaxRate() *f64
```

- *Type:* *f64

---

##### `MaxRatePerEndpoint`<sup>Required</sup> <a name="MaxRatePerEndpoint" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.maxRatePerEndpoint"></a>

```go
func MaxRatePerEndpoint() *f64
```

- *Type:* *f64

---

##### `MaxRatePerInstance`<sup>Required</sup> <a name="MaxRatePerInstance" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.maxRatePerInstance"></a>

```go
func MaxRatePerInstance() *f64
```

- *Type:* *f64

---

##### `MaxUtilization`<sup>Required</sup> <a name="MaxUtilization" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.maxUtilization"></a>

```go
func MaxUtilization() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference <a name="ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregionbackendservice"

computeregionbackendservice.NewComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeHost">ResetIncludeHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeNamedCookies">ResetIncludeNamedCookies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeProtocol">ResetIncludeProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeQueryString">ResetIncludeQueryString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetQueryStringBlacklist">ResetQueryStringBlacklist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetQueryStringWhitelist">ResetQueryStringWhitelist</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludeHost` <a name="ResetIncludeHost" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeHost"></a>

```go
func ResetIncludeHost()
```

##### `ResetIncludeNamedCookies` <a name="ResetIncludeNamedCookies" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeNamedCookies"></a>

```go
func ResetIncludeNamedCookies()
```

##### `ResetIncludeProtocol` <a name="ResetIncludeProtocol" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeProtocol"></a>

```go
func ResetIncludeProtocol()
```

##### `ResetIncludeQueryString` <a name="ResetIncludeQueryString" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeQueryString"></a>

```go
func ResetIncludeQueryString()
```

##### `ResetQueryStringBlacklist` <a name="ResetQueryStringBlacklist" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetQueryStringBlacklist"></a>

```go
func ResetQueryStringBlacklist()
```

##### `ResetQueryStringWhitelist` <a name="ResetQueryStringWhitelist" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetQueryStringWhitelist"></a>

```go
func ResetQueryStringWhitelist()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeHostInput">IncludeHostInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeNamedCookiesInput">IncludeNamedCookiesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeProtocolInput">IncludeProtocolInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeQueryStringInput">IncludeQueryStringInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringBlacklistInput">QueryStringBlacklistInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringWhitelistInput">QueryStringWhitelistInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeHost">IncludeHost</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeNamedCookies">IncludeNamedCookies</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeProtocol">IncludeProtocol</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeQueryString">IncludeQueryString</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringBlacklist">QueryStringBlacklist</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringWhitelist">QueryStringWhitelist</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy">ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IncludeHostInput`<sup>Optional</sup> <a name="IncludeHostInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeHostInput"></a>

```go
func IncludeHostInput() interface{}
```

- *Type:* interface{}

---

##### `IncludeNamedCookiesInput`<sup>Optional</sup> <a name="IncludeNamedCookiesInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeNamedCookiesInput"></a>

```go
func IncludeNamedCookiesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IncludeProtocolInput`<sup>Optional</sup> <a name="IncludeProtocolInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeProtocolInput"></a>

```go
func IncludeProtocolInput() interface{}
```

- *Type:* interface{}

---

##### `IncludeQueryStringInput`<sup>Optional</sup> <a name="IncludeQueryStringInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeQueryStringInput"></a>

```go
func IncludeQueryStringInput() interface{}
```

- *Type:* interface{}

---

##### `QueryStringBlacklistInput`<sup>Optional</sup> <a name="QueryStringBlacklistInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringBlacklistInput"></a>

```go
func QueryStringBlacklistInput() *[]*string
```

- *Type:* *[]*string

---

##### `QueryStringWhitelistInput`<sup>Optional</sup> <a name="QueryStringWhitelistInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringWhitelistInput"></a>

```go
func QueryStringWhitelistInput() *[]*string
```

- *Type:* *[]*string

---

##### `IncludeHost`<sup>Required</sup> <a name="IncludeHost" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeHost"></a>

```go
func IncludeHost() interface{}
```

- *Type:* interface{}

---

##### `IncludeNamedCookies`<sup>Required</sup> <a name="IncludeNamedCookies" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeNamedCookies"></a>

```go
func IncludeNamedCookies() *[]*string
```

- *Type:* *[]*string

---

##### `IncludeProtocol`<sup>Required</sup> <a name="IncludeProtocol" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeProtocol"></a>

```go
func IncludeProtocol() interface{}
```

- *Type:* interface{}

---

##### `IncludeQueryString`<sup>Required</sup> <a name="IncludeQueryString" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeQueryString"></a>

```go
func IncludeQueryString() interface{}
```

- *Type:* interface{}

---

##### `QueryStringBlacklist`<sup>Required</sup> <a name="QueryStringBlacklist" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringBlacklist"></a>

```go
func QueryStringBlacklist() *[]*string
```

- *Type:* *[]*string

---

##### `QueryStringWhitelist`<sup>Required</sup> <a name="QueryStringWhitelist" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringWhitelist"></a>

```go
func QueryStringWhitelist() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy">ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy</a>

---


### ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList <a name="ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregionbackendservice"

computeregionbackendservice.NewComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.get"></a>

```go
func Get(index *f64) ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference <a name="ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregionbackendservice"

computeregionbackendservice.NewComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resetCode">ResetCode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCode` <a name="ResetCode" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resetCode"></a>

```go
func ResetCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.codeInput">CodeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.code">Code</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CodeInput`<sup>Optional</sup> <a name="CodeInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.codeInput"></a>

```go
func CodeInput() *f64
```

- *Type:* *f64

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.code"></a>

```go
func Code() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeRegionBackendServiceCdnPolicyOutputReference <a name="ComputeRegionBackendServiceCdnPolicyOutputReference" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregionbackendservice"

computeregionbackendservice.NewComputeRegionBackendServiceCdnPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeRegionBackendServiceCdnPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.putCacheKeyPolicy">PutCacheKeyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.putNegativeCachingPolicy">PutNegativeCachingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.resetCacheKeyPolicy">ResetCacheKeyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.resetCacheMode">ResetCacheMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.resetClientTtl">ResetClientTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.resetDefaultTtl">ResetDefaultTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.resetMaxTtl">ResetMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.resetNegativeCaching">ResetNegativeCaching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.resetNegativeCachingPolicy">ResetNegativeCachingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.resetServeWhileStale">ResetServeWhileStale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.resetSignedUrlCacheMaxAgeSec">ResetSignedUrlCacheMaxAgeSec</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCacheKeyPolicy` <a name="PutCacheKeyPolicy" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.putCacheKeyPolicy"></a>

```go
func PutCacheKeyPolicy(value ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.putCacheKeyPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy">ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy</a>

---

##### `PutNegativeCachingPolicy` <a name="PutNegativeCachingPolicy" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.putNegativeCachingPolicy"></a>

```go
func PutNegativeCachingPolicy(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.putNegativeCachingPolicy.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCacheKeyPolicy` <a name="ResetCacheKeyPolicy" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.resetCacheKeyPolicy"></a>

```go
func ResetCacheKeyPolicy()
```

##### `ResetCacheMode` <a name="ResetCacheMode" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.resetCacheMode"></a>

```go
func ResetCacheMode()
```

##### `ResetClientTtl` <a name="ResetClientTtl" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.resetClientTtl"></a>

```go
func ResetClientTtl()
```

##### `ResetDefaultTtl` <a name="ResetDefaultTtl" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.resetDefaultTtl"></a>

```go
func ResetDefaultTtl()
```

##### `ResetMaxTtl` <a name="ResetMaxTtl" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.resetMaxTtl"></a>

```go
func ResetMaxTtl()
```

##### `ResetNegativeCaching` <a name="ResetNegativeCaching" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.resetNegativeCaching"></a>

```go
func ResetNegativeCaching()
```

##### `ResetNegativeCachingPolicy` <a name="ResetNegativeCachingPolicy" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.resetNegativeCachingPolicy"></a>

```go
func ResetNegativeCachingPolicy()
```

##### `ResetServeWhileStale` <a name="ResetServeWhileStale" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.resetServeWhileStale"></a>

```go
func ResetServeWhileStale()
```

##### `ResetSignedUrlCacheMaxAgeSec` <a name="ResetSignedUrlCacheMaxAgeSec" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.resetSignedUrlCacheMaxAgeSec"></a>

```go
func ResetSignedUrlCacheMaxAgeSec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.property.cacheKeyPolicy">CacheKeyPolicy</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference">ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.property.negativeCachingPolicy">NegativeCachingPolicy</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList">ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.property.cacheKeyPolicyInput">CacheKeyPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy">ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.property.cacheModeInput">CacheModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.property.clientTtlInput">ClientTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.property.defaultTtlInput">DefaultTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.property.maxTtlInput">MaxTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.property.negativeCachingInput">NegativeCachingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.property.negativeCachingPolicyInput">NegativeCachingPolicyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.property.serveWhileStaleInput">ServeWhileStaleInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.property.signedUrlCacheMaxAgeSecInput">SignedUrlCacheMaxAgeSecInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.property.cacheMode">CacheMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.property.clientTtl">ClientTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.property.defaultTtl">DefaultTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.property.maxTtl">MaxTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.property.negativeCaching">NegativeCaching</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.property.serveWhileStale">ServeWhileStale</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.property.signedUrlCacheMaxAgeSec">SignedUrlCacheMaxAgeSec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicy">ComputeRegionBackendServiceCdnPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CacheKeyPolicy`<sup>Required</sup> <a name="CacheKeyPolicy" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.property.cacheKeyPolicy"></a>

```go
func CacheKeyPolicy() ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference">ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference</a>

---

##### `NegativeCachingPolicy`<sup>Required</sup> <a name="NegativeCachingPolicy" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.property.negativeCachingPolicy"></a>

```go
func NegativeCachingPolicy() ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList">ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList</a>

---

##### `CacheKeyPolicyInput`<sup>Optional</sup> <a name="CacheKeyPolicyInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.property.cacheKeyPolicyInput"></a>

```go
func CacheKeyPolicyInput() ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy">ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy</a>

---

##### `CacheModeInput`<sup>Optional</sup> <a name="CacheModeInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.property.cacheModeInput"></a>

```go
func CacheModeInput() *string
```

- *Type:* *string

---

##### `ClientTtlInput`<sup>Optional</sup> <a name="ClientTtlInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.property.clientTtlInput"></a>

```go
func ClientTtlInput() *f64
```

- *Type:* *f64

---

##### `DefaultTtlInput`<sup>Optional</sup> <a name="DefaultTtlInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.property.defaultTtlInput"></a>

```go
func DefaultTtlInput() *f64
```

- *Type:* *f64

---

##### `MaxTtlInput`<sup>Optional</sup> <a name="MaxTtlInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.property.maxTtlInput"></a>

```go
func MaxTtlInput() *f64
```

- *Type:* *f64

---

##### `NegativeCachingInput`<sup>Optional</sup> <a name="NegativeCachingInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.property.negativeCachingInput"></a>

```go
func NegativeCachingInput() interface{}
```

- *Type:* interface{}

---

##### `NegativeCachingPolicyInput`<sup>Optional</sup> <a name="NegativeCachingPolicyInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.property.negativeCachingPolicyInput"></a>

```go
func NegativeCachingPolicyInput() interface{}
```

- *Type:* interface{}

---

##### `ServeWhileStaleInput`<sup>Optional</sup> <a name="ServeWhileStaleInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.property.serveWhileStaleInput"></a>

```go
func ServeWhileStaleInput() *f64
```

- *Type:* *f64

---

##### `SignedUrlCacheMaxAgeSecInput`<sup>Optional</sup> <a name="SignedUrlCacheMaxAgeSecInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.property.signedUrlCacheMaxAgeSecInput"></a>

```go
func SignedUrlCacheMaxAgeSecInput() *f64
```

- *Type:* *f64

---

##### `CacheMode`<sup>Required</sup> <a name="CacheMode" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.property.cacheMode"></a>

```go
func CacheMode() *string
```

- *Type:* *string

---

##### `ClientTtl`<sup>Required</sup> <a name="ClientTtl" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.property.clientTtl"></a>

```go
func ClientTtl() *f64
```

- *Type:* *f64

---

##### `DefaultTtl`<sup>Required</sup> <a name="DefaultTtl" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.property.defaultTtl"></a>

```go
func DefaultTtl() *f64
```

- *Type:* *f64

---

##### `MaxTtl`<sup>Required</sup> <a name="MaxTtl" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.property.maxTtl"></a>

```go
func MaxTtl() *f64
```

- *Type:* *f64

---

##### `NegativeCaching`<sup>Required</sup> <a name="NegativeCaching" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.property.negativeCaching"></a>

```go
func NegativeCaching() interface{}
```

- *Type:* interface{}

---

##### `ServeWhileStale`<sup>Required</sup> <a name="ServeWhileStale" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.property.serveWhileStale"></a>

```go
func ServeWhileStale() *f64
```

- *Type:* *f64

---

##### `SignedUrlCacheMaxAgeSec`<sup>Required</sup> <a name="SignedUrlCacheMaxAgeSec" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.property.signedUrlCacheMaxAgeSec"></a>

```go
func SignedUrlCacheMaxAgeSec() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeRegionBackendServiceCdnPolicy
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicy">ComputeRegionBackendServiceCdnPolicy</a>

---


### ComputeRegionBackendServiceCircuitBreakersOutputReference <a name="ComputeRegionBackendServiceCircuitBreakersOutputReference" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregionbackendservice"

computeregionbackendservice.NewComputeRegionBackendServiceCircuitBreakersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeRegionBackendServiceCircuitBreakersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.resetMaxConnections">ResetMaxConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.resetMaxPendingRequests">ResetMaxPendingRequests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.resetMaxRequests">ResetMaxRequests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.resetMaxRequestsPerConnection">ResetMaxRequestsPerConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.resetMaxRetries">ResetMaxRetries</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxConnections` <a name="ResetMaxConnections" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.resetMaxConnections"></a>

```go
func ResetMaxConnections()
```

##### `ResetMaxPendingRequests` <a name="ResetMaxPendingRequests" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.resetMaxPendingRequests"></a>

```go
func ResetMaxPendingRequests()
```

##### `ResetMaxRequests` <a name="ResetMaxRequests" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.resetMaxRequests"></a>

```go
func ResetMaxRequests()
```

##### `ResetMaxRequestsPerConnection` <a name="ResetMaxRequestsPerConnection" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.resetMaxRequestsPerConnection"></a>

```go
func ResetMaxRequestsPerConnection()
```

##### `ResetMaxRetries` <a name="ResetMaxRetries" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.resetMaxRetries"></a>

```go
func ResetMaxRetries()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxConnectionsInput">MaxConnectionsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxPendingRequestsInput">MaxPendingRequestsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxRequestsInput">MaxRequestsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxRequestsPerConnectionInput">MaxRequestsPerConnectionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxRetriesInput">MaxRetriesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxConnections">MaxConnections</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxPendingRequests">MaxPendingRequests</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxRequests">MaxRequests</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxRequestsPerConnection">MaxRequestsPerConnection</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxRetries">MaxRetries</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakers">ComputeRegionBackendServiceCircuitBreakers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxConnectionsInput`<sup>Optional</sup> <a name="MaxConnectionsInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxConnectionsInput"></a>

```go
func MaxConnectionsInput() *f64
```

- *Type:* *f64

---

##### `MaxPendingRequestsInput`<sup>Optional</sup> <a name="MaxPendingRequestsInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxPendingRequestsInput"></a>

```go
func MaxPendingRequestsInput() *f64
```

- *Type:* *f64

---

##### `MaxRequestsInput`<sup>Optional</sup> <a name="MaxRequestsInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxRequestsInput"></a>

```go
func MaxRequestsInput() *f64
```

- *Type:* *f64

---

##### `MaxRequestsPerConnectionInput`<sup>Optional</sup> <a name="MaxRequestsPerConnectionInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxRequestsPerConnectionInput"></a>

```go
func MaxRequestsPerConnectionInput() *f64
```

- *Type:* *f64

---

##### `MaxRetriesInput`<sup>Optional</sup> <a name="MaxRetriesInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxRetriesInput"></a>

```go
func MaxRetriesInput() *f64
```

- *Type:* *f64

---

##### `MaxConnections`<sup>Required</sup> <a name="MaxConnections" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxConnections"></a>

```go
func MaxConnections() *f64
```

- *Type:* *f64

---

##### `MaxPendingRequests`<sup>Required</sup> <a name="MaxPendingRequests" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxPendingRequests"></a>

```go
func MaxPendingRequests() *f64
```

- *Type:* *f64

---

##### `MaxRequests`<sup>Required</sup> <a name="MaxRequests" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxRequests"></a>

```go
func MaxRequests() *f64
```

- *Type:* *f64

---

##### `MaxRequestsPerConnection`<sup>Required</sup> <a name="MaxRequestsPerConnection" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxRequestsPerConnection"></a>

```go
func MaxRequestsPerConnection() *f64
```

- *Type:* *f64

---

##### `MaxRetries`<sup>Required</sup> <a name="MaxRetries" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxRetries"></a>

```go
func MaxRetries() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeRegionBackendServiceCircuitBreakers
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakers">ComputeRegionBackendServiceCircuitBreakers</a>

---


### ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference <a name="ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregionbackendservice"

computeregionbackendservice.NewComputeRegionBackendServiceConsistentHashHttpCookieOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.putTtl">PutTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.resetTtl">ResetTtl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTtl` <a name="PutTtl" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.putTtl"></a>

```go
func PutTtl(value ComputeRegionBackendServiceConsistentHashHttpCookieTtl)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.putTtl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtl">ComputeRegionBackendServiceConsistentHashHttpCookieTtl</a>

---

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.resetPath"></a>

```go
func ResetPath()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.resetTtl"></a>

```go
func ResetTtl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.ttl">Ttl</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference">ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.ttlInput">TtlInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtl">ComputeRegionBackendServiceConsistentHashHttpCookieTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookie">ComputeRegionBackendServiceConsistentHashHttpCookie</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.ttl"></a>

```go
func Ttl() ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference">ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.ttlInput"></a>

```go
func TtlInput() ComputeRegionBackendServiceConsistentHashHttpCookieTtl
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtl">ComputeRegionBackendServiceConsistentHashHttpCookieTtl</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeRegionBackendServiceConsistentHashHttpCookie
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookie">ComputeRegionBackendServiceConsistentHashHttpCookie</a>

---


### ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference <a name="ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregionbackendservice"

computeregionbackendservice.NewComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.resetNanos">ResetNanos</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNanos` <a name="ResetNanos" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.resetNanos"></a>

```go
func ResetNanos()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.nanosInput">NanosInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.secondsInput">SecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.nanos">Nanos</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.seconds">Seconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtl">ComputeRegionBackendServiceConsistentHashHttpCookieTtl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NanosInput`<sup>Optional</sup> <a name="NanosInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.nanosInput"></a>

```go
func NanosInput() *f64
```

- *Type:* *f64

---

##### `SecondsInput`<sup>Optional</sup> <a name="SecondsInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.secondsInput"></a>

```go
func SecondsInput() *f64
```

- *Type:* *f64

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.nanos"></a>

```go
func Nanos() *f64
```

- *Type:* *f64

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.seconds"></a>

```go
func Seconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeRegionBackendServiceConsistentHashHttpCookieTtl
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtl">ComputeRegionBackendServiceConsistentHashHttpCookieTtl</a>

---


### ComputeRegionBackendServiceConsistentHashOutputReference <a name="ComputeRegionBackendServiceConsistentHashOutputReference" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregionbackendservice"

computeregionbackendservice.NewComputeRegionBackendServiceConsistentHashOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeRegionBackendServiceConsistentHashOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.putHttpCookie">PutHttpCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.resetHttpCookie">ResetHttpCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.resetHttpHeaderName">ResetHttpHeaderName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.resetMinimumRingSize">ResetMinimumRingSize</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHttpCookie` <a name="PutHttpCookie" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.putHttpCookie"></a>

```go
func PutHttpCookie(value ComputeRegionBackendServiceConsistentHashHttpCookie)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.putHttpCookie.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookie">ComputeRegionBackendServiceConsistentHashHttpCookie</a>

---

##### `ResetHttpCookie` <a name="ResetHttpCookie" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.resetHttpCookie"></a>

```go
func ResetHttpCookie()
```

##### `ResetHttpHeaderName` <a name="ResetHttpHeaderName" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.resetHttpHeaderName"></a>

```go
func ResetHttpHeaderName()
```

##### `ResetMinimumRingSize` <a name="ResetMinimumRingSize" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.resetMinimumRingSize"></a>

```go
func ResetMinimumRingSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.property.httpCookie">HttpCookie</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference">ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.property.httpCookieInput">HttpCookieInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookie">ComputeRegionBackendServiceConsistentHashHttpCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.property.httpHeaderNameInput">HttpHeaderNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.property.minimumRingSizeInput">MinimumRingSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.property.httpHeaderName">HttpHeaderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.property.minimumRingSize">MinimumRingSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHash">ComputeRegionBackendServiceConsistentHash</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HttpCookie`<sup>Required</sup> <a name="HttpCookie" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.property.httpCookie"></a>

```go
func HttpCookie() ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference">ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference</a>

---

##### `HttpCookieInput`<sup>Optional</sup> <a name="HttpCookieInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.property.httpCookieInput"></a>

```go
func HttpCookieInput() ComputeRegionBackendServiceConsistentHashHttpCookie
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookie">ComputeRegionBackendServiceConsistentHashHttpCookie</a>

---

##### `HttpHeaderNameInput`<sup>Optional</sup> <a name="HttpHeaderNameInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.property.httpHeaderNameInput"></a>

```go
func HttpHeaderNameInput() *string
```

- *Type:* *string

---

##### `MinimumRingSizeInput`<sup>Optional</sup> <a name="MinimumRingSizeInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.property.minimumRingSizeInput"></a>

```go
func MinimumRingSizeInput() *f64
```

- *Type:* *f64

---

##### `HttpHeaderName`<sup>Required</sup> <a name="HttpHeaderName" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.property.httpHeaderName"></a>

```go
func HttpHeaderName() *string
```

- *Type:* *string

---

##### `MinimumRingSize`<sup>Required</sup> <a name="MinimumRingSize" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.property.minimumRingSize"></a>

```go
func MinimumRingSize() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeRegionBackendServiceConsistentHash
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHash">ComputeRegionBackendServiceConsistentHash</a>

---


### ComputeRegionBackendServiceFailoverPolicyOutputReference <a name="ComputeRegionBackendServiceFailoverPolicyOutputReference" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregionbackendservice"

computeregionbackendservice.NewComputeRegionBackendServiceFailoverPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeRegionBackendServiceFailoverPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.resetDisableConnectionDrainOnFailover">ResetDisableConnectionDrainOnFailover</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.resetDropTrafficIfUnhealthy">ResetDropTrafficIfUnhealthy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.resetFailoverRatio">ResetFailoverRatio</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisableConnectionDrainOnFailover` <a name="ResetDisableConnectionDrainOnFailover" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.resetDisableConnectionDrainOnFailover"></a>

```go
func ResetDisableConnectionDrainOnFailover()
```

##### `ResetDropTrafficIfUnhealthy` <a name="ResetDropTrafficIfUnhealthy" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.resetDropTrafficIfUnhealthy"></a>

```go
func ResetDropTrafficIfUnhealthy()
```

##### `ResetFailoverRatio` <a name="ResetFailoverRatio" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.resetFailoverRatio"></a>

```go
func ResetFailoverRatio()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.property.disableConnectionDrainOnFailoverInput">DisableConnectionDrainOnFailoverInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.property.dropTrafficIfUnhealthyInput">DropTrafficIfUnhealthyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.property.failoverRatioInput">FailoverRatioInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.property.disableConnectionDrainOnFailover">DisableConnectionDrainOnFailover</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.property.dropTrafficIfUnhealthy">DropTrafficIfUnhealthy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.property.failoverRatio">FailoverRatio</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicy">ComputeRegionBackendServiceFailoverPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisableConnectionDrainOnFailoverInput`<sup>Optional</sup> <a name="DisableConnectionDrainOnFailoverInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.property.disableConnectionDrainOnFailoverInput"></a>

```go
func DisableConnectionDrainOnFailoverInput() interface{}
```

- *Type:* interface{}

---

##### `DropTrafficIfUnhealthyInput`<sup>Optional</sup> <a name="DropTrafficIfUnhealthyInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.property.dropTrafficIfUnhealthyInput"></a>

```go
func DropTrafficIfUnhealthyInput() interface{}
```

- *Type:* interface{}

---

##### `FailoverRatioInput`<sup>Optional</sup> <a name="FailoverRatioInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.property.failoverRatioInput"></a>

```go
func FailoverRatioInput() *f64
```

- *Type:* *f64

---

##### `DisableConnectionDrainOnFailover`<sup>Required</sup> <a name="DisableConnectionDrainOnFailover" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.property.disableConnectionDrainOnFailover"></a>

```go
func DisableConnectionDrainOnFailover() interface{}
```

- *Type:* interface{}

---

##### `DropTrafficIfUnhealthy`<sup>Required</sup> <a name="DropTrafficIfUnhealthy" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.property.dropTrafficIfUnhealthy"></a>

```go
func DropTrafficIfUnhealthy() interface{}
```

- *Type:* interface{}

---

##### `FailoverRatio`<sup>Required</sup> <a name="FailoverRatio" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.property.failoverRatio"></a>

```go
func FailoverRatio() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeRegionBackendServiceFailoverPolicy
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicy">ComputeRegionBackendServiceFailoverPolicy</a>

---


### ComputeRegionBackendServiceIapOutputReference <a name="ComputeRegionBackendServiceIapOutputReference" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregionbackendservice"

computeregionbackendservice.NewComputeRegionBackendServiceIapOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeRegionBackendServiceIapOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.property.oauth2ClientSecretSha256">Oauth2ClientSecretSha256</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.property.oauth2ClientIdInput">Oauth2ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.property.oauth2ClientSecretInput">Oauth2ClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.property.oauth2ClientId">Oauth2ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.property.oauth2ClientSecret">Oauth2ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIap">ComputeRegionBackendServiceIap</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Oauth2ClientSecretSha256`<sup>Required</sup> <a name="Oauth2ClientSecretSha256" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.property.oauth2ClientSecretSha256"></a>

```go
func Oauth2ClientSecretSha256() *string
```

- *Type:* *string

---

##### `Oauth2ClientIdInput`<sup>Optional</sup> <a name="Oauth2ClientIdInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.property.oauth2ClientIdInput"></a>

```go
func Oauth2ClientIdInput() *string
```

- *Type:* *string

---

##### `Oauth2ClientSecretInput`<sup>Optional</sup> <a name="Oauth2ClientSecretInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.property.oauth2ClientSecretInput"></a>

```go
func Oauth2ClientSecretInput() *string
```

- *Type:* *string

---

##### `Oauth2ClientId`<sup>Required</sup> <a name="Oauth2ClientId" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.property.oauth2ClientId"></a>

```go
func Oauth2ClientId() *string
```

- *Type:* *string

---

##### `Oauth2ClientSecret`<sup>Required</sup> <a name="Oauth2ClientSecret" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.property.oauth2ClientSecret"></a>

```go
func Oauth2ClientSecret() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeRegionBackendServiceIap
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIap">ComputeRegionBackendServiceIap</a>

---


### ComputeRegionBackendServiceLogConfigOutputReference <a name="ComputeRegionBackendServiceLogConfigOutputReference" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregionbackendservice"

computeregionbackendservice.NewComputeRegionBackendServiceLogConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeRegionBackendServiceLogConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.resetEnable">ResetEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.resetSampleRate">ResetSampleRate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnable` <a name="ResetEnable" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.resetEnable"></a>

```go
func ResetEnable()
```

##### `ResetSampleRate` <a name="ResetSampleRate" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.resetSampleRate"></a>

```go
func ResetSampleRate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.property.enableInput">EnableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.property.sampleRateInput">SampleRateInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.property.enable">Enable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.property.sampleRate">SampleRate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfig">ComputeRegionBackendServiceLogConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableInput`<sup>Optional</sup> <a name="EnableInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.property.enableInput"></a>

```go
func EnableInput() interface{}
```

- *Type:* interface{}

---

##### `SampleRateInput`<sup>Optional</sup> <a name="SampleRateInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.property.sampleRateInput"></a>

```go
func SampleRateInput() *f64
```

- *Type:* *f64

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.property.enable"></a>

```go
func Enable() interface{}
```

- *Type:* interface{}

---

##### `SampleRate`<sup>Required</sup> <a name="SampleRate" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.property.sampleRate"></a>

```go
func SampleRate() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeRegionBackendServiceLogConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfig">ComputeRegionBackendServiceLogConfig</a>

---


### ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference <a name="ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregionbackendservice"

computeregionbackendservice.NewComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.resetNanos">ResetNanos</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNanos` <a name="ResetNanos" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.resetNanos"></a>

```go
func ResetNanos()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.nanosInput">NanosInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.secondsInput">SecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.nanos">Nanos</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.seconds">Seconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTime">ComputeRegionBackendServiceOutlierDetectionBaseEjectionTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NanosInput`<sup>Optional</sup> <a name="NanosInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.nanosInput"></a>

```go
func NanosInput() *f64
```

- *Type:* *f64

---

##### `SecondsInput`<sup>Optional</sup> <a name="SecondsInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.secondsInput"></a>

```go
func SecondsInput() *f64
```

- *Type:* *f64

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.nanos"></a>

```go
func Nanos() *f64
```

- *Type:* *f64

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.seconds"></a>

```go
func Seconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeRegionBackendServiceOutlierDetectionBaseEjectionTime
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTime">ComputeRegionBackendServiceOutlierDetectionBaseEjectionTime</a>

---


### ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference <a name="ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregionbackendservice"

computeregionbackendservice.NewComputeRegionBackendServiceOutlierDetectionIntervalOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.resetNanos">ResetNanos</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNanos` <a name="ResetNanos" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.resetNanos"></a>

```go
func ResetNanos()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.nanosInput">NanosInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.secondsInput">SecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.nanos">Nanos</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.seconds">Seconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionInterval">ComputeRegionBackendServiceOutlierDetectionInterval</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NanosInput`<sup>Optional</sup> <a name="NanosInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.nanosInput"></a>

```go
func NanosInput() *f64
```

- *Type:* *f64

---

##### `SecondsInput`<sup>Optional</sup> <a name="SecondsInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.secondsInput"></a>

```go
func SecondsInput() *f64
```

- *Type:* *f64

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.nanos"></a>

```go
func Nanos() *f64
```

- *Type:* *f64

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.seconds"></a>

```go
func Seconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeRegionBackendServiceOutlierDetectionInterval
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionInterval">ComputeRegionBackendServiceOutlierDetectionInterval</a>

---


### ComputeRegionBackendServiceOutlierDetectionOutputReference <a name="ComputeRegionBackendServiceOutlierDetectionOutputReference" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregionbackendservice"

computeregionbackendservice.NewComputeRegionBackendServiceOutlierDetectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeRegionBackendServiceOutlierDetectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.putBaseEjectionTime">PutBaseEjectionTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.putInterval">PutInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.resetBaseEjectionTime">ResetBaseEjectionTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.resetConsecutiveErrors">ResetConsecutiveErrors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.resetConsecutiveGatewayFailure">ResetConsecutiveGatewayFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.resetEnforcingConsecutiveErrors">ResetEnforcingConsecutiveErrors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.resetEnforcingConsecutiveGatewayFailure">ResetEnforcingConsecutiveGatewayFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.resetEnforcingSuccessRate">ResetEnforcingSuccessRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.resetInterval">ResetInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.resetMaxEjectionPercent">ResetMaxEjectionPercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.resetSuccessRateMinimumHosts">ResetSuccessRateMinimumHosts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.resetSuccessRateRequestVolume">ResetSuccessRateRequestVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.resetSuccessRateStdevFactor">ResetSuccessRateStdevFactor</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBaseEjectionTime` <a name="PutBaseEjectionTime" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.putBaseEjectionTime"></a>

```go
func PutBaseEjectionTime(value ComputeRegionBackendServiceOutlierDetectionBaseEjectionTime)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.putBaseEjectionTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTime">ComputeRegionBackendServiceOutlierDetectionBaseEjectionTime</a>

---

##### `PutInterval` <a name="PutInterval" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.putInterval"></a>

```go
func PutInterval(value ComputeRegionBackendServiceOutlierDetectionInterval)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.putInterval.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionInterval">ComputeRegionBackendServiceOutlierDetectionInterval</a>

---

##### `ResetBaseEjectionTime` <a name="ResetBaseEjectionTime" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.resetBaseEjectionTime"></a>

```go
func ResetBaseEjectionTime()
```

##### `ResetConsecutiveErrors` <a name="ResetConsecutiveErrors" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.resetConsecutiveErrors"></a>

```go
func ResetConsecutiveErrors()
```

##### `ResetConsecutiveGatewayFailure` <a name="ResetConsecutiveGatewayFailure" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.resetConsecutiveGatewayFailure"></a>

```go
func ResetConsecutiveGatewayFailure()
```

##### `ResetEnforcingConsecutiveErrors` <a name="ResetEnforcingConsecutiveErrors" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.resetEnforcingConsecutiveErrors"></a>

```go
func ResetEnforcingConsecutiveErrors()
```

##### `ResetEnforcingConsecutiveGatewayFailure` <a name="ResetEnforcingConsecutiveGatewayFailure" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.resetEnforcingConsecutiveGatewayFailure"></a>

```go
func ResetEnforcingConsecutiveGatewayFailure()
```

##### `ResetEnforcingSuccessRate` <a name="ResetEnforcingSuccessRate" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.resetEnforcingSuccessRate"></a>

```go
func ResetEnforcingSuccessRate()
```

##### `ResetInterval` <a name="ResetInterval" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.resetInterval"></a>

```go
func ResetInterval()
```

##### `ResetMaxEjectionPercent` <a name="ResetMaxEjectionPercent" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.resetMaxEjectionPercent"></a>

```go
func ResetMaxEjectionPercent()
```

##### `ResetSuccessRateMinimumHosts` <a name="ResetSuccessRateMinimumHosts" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.resetSuccessRateMinimumHosts"></a>

```go
func ResetSuccessRateMinimumHosts()
```

##### `ResetSuccessRateRequestVolume` <a name="ResetSuccessRateRequestVolume" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.resetSuccessRateRequestVolume"></a>

```go
func ResetSuccessRateRequestVolume()
```

##### `ResetSuccessRateStdevFactor` <a name="ResetSuccessRateStdevFactor" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.resetSuccessRateStdevFactor"></a>

```go
func ResetSuccessRateStdevFactor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.baseEjectionTime">BaseEjectionTime</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference">ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.interval">Interval</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference">ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.baseEjectionTimeInput">BaseEjectionTimeInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTime">ComputeRegionBackendServiceOutlierDetectionBaseEjectionTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.consecutiveErrorsInput">ConsecutiveErrorsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.consecutiveGatewayFailureInput">ConsecutiveGatewayFailureInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveErrorsInput">EnforcingConsecutiveErrorsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveGatewayFailureInput">EnforcingConsecutiveGatewayFailureInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.enforcingSuccessRateInput">EnforcingSuccessRateInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.intervalInput">IntervalInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionInterval">ComputeRegionBackendServiceOutlierDetectionInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.maxEjectionPercentInput">MaxEjectionPercentInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.successRateMinimumHostsInput">SuccessRateMinimumHostsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.successRateRequestVolumeInput">SuccessRateRequestVolumeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.successRateStdevFactorInput">SuccessRateStdevFactorInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.consecutiveErrors">ConsecutiveErrors</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.consecutiveGatewayFailure">ConsecutiveGatewayFailure</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveErrors">EnforcingConsecutiveErrors</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveGatewayFailure">EnforcingConsecutiveGatewayFailure</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.enforcingSuccessRate">EnforcingSuccessRate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.maxEjectionPercent">MaxEjectionPercent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.successRateMinimumHosts">SuccessRateMinimumHosts</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.successRateRequestVolume">SuccessRateRequestVolume</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.successRateStdevFactor">SuccessRateStdevFactor</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetection">ComputeRegionBackendServiceOutlierDetection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BaseEjectionTime`<sup>Required</sup> <a name="BaseEjectionTime" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.baseEjectionTime"></a>

```go
func BaseEjectionTime() ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference">ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference</a>

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.interval"></a>

```go
func Interval() ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference">ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference</a>

---

##### `BaseEjectionTimeInput`<sup>Optional</sup> <a name="BaseEjectionTimeInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.baseEjectionTimeInput"></a>

```go
func BaseEjectionTimeInput() ComputeRegionBackendServiceOutlierDetectionBaseEjectionTime
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTime">ComputeRegionBackendServiceOutlierDetectionBaseEjectionTime</a>

---

##### `ConsecutiveErrorsInput`<sup>Optional</sup> <a name="ConsecutiveErrorsInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.consecutiveErrorsInput"></a>

```go
func ConsecutiveErrorsInput() *f64
```

- *Type:* *f64

---

##### `ConsecutiveGatewayFailureInput`<sup>Optional</sup> <a name="ConsecutiveGatewayFailureInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.consecutiveGatewayFailureInput"></a>

```go
func ConsecutiveGatewayFailureInput() *f64
```

- *Type:* *f64

---

##### `EnforcingConsecutiveErrorsInput`<sup>Optional</sup> <a name="EnforcingConsecutiveErrorsInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveErrorsInput"></a>

```go
func EnforcingConsecutiveErrorsInput() *f64
```

- *Type:* *f64

---

##### `EnforcingConsecutiveGatewayFailureInput`<sup>Optional</sup> <a name="EnforcingConsecutiveGatewayFailureInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveGatewayFailureInput"></a>

```go
func EnforcingConsecutiveGatewayFailureInput() *f64
```

- *Type:* *f64

---

##### `EnforcingSuccessRateInput`<sup>Optional</sup> <a name="EnforcingSuccessRateInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.enforcingSuccessRateInput"></a>

```go
func EnforcingSuccessRateInput() *f64
```

- *Type:* *f64

---

##### `IntervalInput`<sup>Optional</sup> <a name="IntervalInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.intervalInput"></a>

```go
func IntervalInput() ComputeRegionBackendServiceOutlierDetectionInterval
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionInterval">ComputeRegionBackendServiceOutlierDetectionInterval</a>

---

##### `MaxEjectionPercentInput`<sup>Optional</sup> <a name="MaxEjectionPercentInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.maxEjectionPercentInput"></a>

```go
func MaxEjectionPercentInput() *f64
```

- *Type:* *f64

---

##### `SuccessRateMinimumHostsInput`<sup>Optional</sup> <a name="SuccessRateMinimumHostsInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.successRateMinimumHostsInput"></a>

```go
func SuccessRateMinimumHostsInput() *f64
```

- *Type:* *f64

---

##### `SuccessRateRequestVolumeInput`<sup>Optional</sup> <a name="SuccessRateRequestVolumeInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.successRateRequestVolumeInput"></a>

```go
func SuccessRateRequestVolumeInput() *f64
```

- *Type:* *f64

---

##### `SuccessRateStdevFactorInput`<sup>Optional</sup> <a name="SuccessRateStdevFactorInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.successRateStdevFactorInput"></a>

```go
func SuccessRateStdevFactorInput() *f64
```

- *Type:* *f64

---

##### `ConsecutiveErrors`<sup>Required</sup> <a name="ConsecutiveErrors" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.consecutiveErrors"></a>

```go
func ConsecutiveErrors() *f64
```

- *Type:* *f64

---

##### `ConsecutiveGatewayFailure`<sup>Required</sup> <a name="ConsecutiveGatewayFailure" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.consecutiveGatewayFailure"></a>

```go
func ConsecutiveGatewayFailure() *f64
```

- *Type:* *f64

---

##### `EnforcingConsecutiveErrors`<sup>Required</sup> <a name="EnforcingConsecutiveErrors" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveErrors"></a>

```go
func EnforcingConsecutiveErrors() *f64
```

- *Type:* *f64

---

##### `EnforcingConsecutiveGatewayFailure`<sup>Required</sup> <a name="EnforcingConsecutiveGatewayFailure" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveGatewayFailure"></a>

```go
func EnforcingConsecutiveGatewayFailure() *f64
```

- *Type:* *f64

---

##### `EnforcingSuccessRate`<sup>Required</sup> <a name="EnforcingSuccessRate" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.enforcingSuccessRate"></a>

```go
func EnforcingSuccessRate() *f64
```

- *Type:* *f64

---

##### `MaxEjectionPercent`<sup>Required</sup> <a name="MaxEjectionPercent" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.maxEjectionPercent"></a>

```go
func MaxEjectionPercent() *f64
```

- *Type:* *f64

---

##### `SuccessRateMinimumHosts`<sup>Required</sup> <a name="SuccessRateMinimumHosts" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.successRateMinimumHosts"></a>

```go
func SuccessRateMinimumHosts() *f64
```

- *Type:* *f64

---

##### `SuccessRateRequestVolume`<sup>Required</sup> <a name="SuccessRateRequestVolume" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.successRateRequestVolume"></a>

```go
func SuccessRateRequestVolume() *f64
```

- *Type:* *f64

---

##### `SuccessRateStdevFactor`<sup>Required</sup> <a name="SuccessRateStdevFactor" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.successRateStdevFactor"></a>

```go
func SuccessRateStdevFactor() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeRegionBackendServiceOutlierDetection
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetection">ComputeRegionBackendServiceOutlierDetection</a>

---


### ComputeRegionBackendServiceTimeoutsOutputReference <a name="ComputeRegionBackendServiceTimeoutsOutputReference" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregionbackendservice"

computeregionbackendservice.NewComputeRegionBackendServiceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeRegionBackendServiceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



