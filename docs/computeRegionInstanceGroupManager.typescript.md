# `google_compute_region_instance_group_manager`

Refer to the Terraform Registory for docs: [`google_compute_region_instance_group_manager`](https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_region_instance_group_manager).

# `computeRegionInstanceGroupManager` Submodule <a name="`computeRegionInstanceGroupManager` Submodule" id="@cdktf/provider-google.computeRegionInstanceGroupManager"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRegionInstanceGroupManager <a name="ComputeRegionInstanceGroupManager" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_region_instance_group_manager google_compute_region_instance_group_manager}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.Initializer"></a>

```typescript
import { computeRegionInstanceGroupManager } from '@cdktf/provider-google'

new computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager(scope: Construct, id: string, config: ComputeRegionInstanceGroupManagerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig">ComputeRegionInstanceGroupManagerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig">ComputeRegionInstanceGroupManagerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.putAutoHealingPolicies">putAutoHealingPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.putNamedPort">putNamedPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.putStatefulDisk">putStatefulDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.putUpdatePolicy">putUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.putVersion">putVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.resetAutoHealingPolicies">resetAutoHealingPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.resetDistributionPolicyTargetShape">resetDistributionPolicyTargetShape</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.resetDistributionPolicyZones">resetDistributionPolicyZones</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.resetListManagedInstancesResults">resetListManagedInstancesResults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.resetNamedPort">resetNamedPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.resetStatefulDisk">resetStatefulDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.resetTargetPools">resetTargetPools</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.resetTargetSize">resetTargetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.resetUpdatePolicy">resetUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.resetWaitForInstances">resetWaitForInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.resetWaitForInstancesStatus">resetWaitForInstancesStatus</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putAutoHealingPolicies` <a name="putAutoHealingPolicies" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.putAutoHealingPolicies"></a>

```typescript
public putAutoHealingPolicies(value: ComputeRegionInstanceGroupManagerAutoHealingPolicies): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.putAutoHealingPolicies.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPolicies">ComputeRegionInstanceGroupManagerAutoHealingPolicies</a>

---

##### `putNamedPort` <a name="putNamedPort" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.putNamedPort"></a>

```typescript
public putNamedPort(value: IResolvable | ComputeRegionInstanceGroupManagerNamedPort[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.putNamedPort.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPort">ComputeRegionInstanceGroupManagerNamedPort</a>[]

---

##### `putStatefulDisk` <a name="putStatefulDisk" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.putStatefulDisk"></a>

```typescript
public putStatefulDisk(value: IResolvable | ComputeRegionInstanceGroupManagerStatefulDisk[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.putStatefulDisk.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDisk">ComputeRegionInstanceGroupManagerStatefulDisk</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.putTimeouts"></a>

```typescript
public putTimeouts(value: ComputeRegionInstanceGroupManagerTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeouts">ComputeRegionInstanceGroupManagerTimeouts</a>

---

##### `putUpdatePolicy` <a name="putUpdatePolicy" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.putUpdatePolicy"></a>

```typescript
public putUpdatePolicy(value: ComputeRegionInstanceGroupManagerUpdatePolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.putUpdatePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicy">ComputeRegionInstanceGroupManagerUpdatePolicy</a>

---

##### `putVersion` <a name="putVersion" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.putVersion"></a>

```typescript
public putVersion(value: IResolvable | ComputeRegionInstanceGroupManagerVersion[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.putVersion.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersion">ComputeRegionInstanceGroupManagerVersion</a>[]

---

##### `resetAutoHealingPolicies` <a name="resetAutoHealingPolicies" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.resetAutoHealingPolicies"></a>

```typescript
public resetAutoHealingPolicies(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDistributionPolicyTargetShape` <a name="resetDistributionPolicyTargetShape" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.resetDistributionPolicyTargetShape"></a>

```typescript
public resetDistributionPolicyTargetShape(): void
```

##### `resetDistributionPolicyZones` <a name="resetDistributionPolicyZones" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.resetDistributionPolicyZones"></a>

```typescript
public resetDistributionPolicyZones(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.resetId"></a>

```typescript
public resetId(): void
```

##### `resetListManagedInstancesResults` <a name="resetListManagedInstancesResults" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.resetListManagedInstancesResults"></a>

```typescript
public resetListManagedInstancesResults(): void
```

##### `resetNamedPort` <a name="resetNamedPort" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.resetNamedPort"></a>

```typescript
public resetNamedPort(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetStatefulDisk` <a name="resetStatefulDisk" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.resetStatefulDisk"></a>

```typescript
public resetStatefulDisk(): void
```

##### `resetTargetPools` <a name="resetTargetPools" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.resetTargetPools"></a>

```typescript
public resetTargetPools(): void
```

##### `resetTargetSize` <a name="resetTargetSize" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.resetTargetSize"></a>

```typescript
public resetTargetSize(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUpdatePolicy` <a name="resetUpdatePolicy" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.resetUpdatePolicy"></a>

```typescript
public resetUpdatePolicy(): void
```

##### `resetWaitForInstances` <a name="resetWaitForInstances" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.resetWaitForInstances"></a>

```typescript
public resetWaitForInstances(): void
```

##### `resetWaitForInstancesStatus` <a name="resetWaitForInstancesStatus" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.resetWaitForInstancesStatus"></a>

```typescript
public resetWaitForInstancesStatus(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.isConstruct"></a>

```typescript
import { computeRegionInstanceGroupManager } from '@cdktf/provider-google'

computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.isTerraformElement"></a>

```typescript
import { computeRegionInstanceGroupManager } from '@cdktf/provider-google'

computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.isTerraformResource"></a>

```typescript
import { computeRegionInstanceGroupManager } from '@cdktf/provider-google'

computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.autoHealingPolicies">autoHealingPolicies</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference">ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.fingerprint">fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.instanceGroup">instanceGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.namedPort">namedPort</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortList">ComputeRegionInstanceGroupManagerNamedPortList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.statefulDisk">statefulDisk</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskList">ComputeRegionInstanceGroupManagerStatefulDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.status">status</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusList">ComputeRegionInstanceGroupManagerStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference">ComputeRegionInstanceGroupManagerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.updatePolicy">updatePolicy</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference">ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.version">version</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionList">ComputeRegionInstanceGroupManagerVersionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.autoHealingPoliciesInput">autoHealingPoliciesInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPolicies">ComputeRegionInstanceGroupManagerAutoHealingPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.baseInstanceNameInput">baseInstanceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.distributionPolicyTargetShapeInput">distributionPolicyTargetShapeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.distributionPolicyZonesInput">distributionPolicyZonesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.listManagedInstancesResultsInput">listManagedInstancesResultsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.namedPortInput">namedPortInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPort">ComputeRegionInstanceGroupManagerNamedPort</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.statefulDiskInput">statefulDiskInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDisk">ComputeRegionInstanceGroupManagerStatefulDisk</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.targetPoolsInput">targetPoolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.targetSizeInput">targetSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeouts">ComputeRegionInstanceGroupManagerTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.updatePolicyInput">updatePolicyInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicy">ComputeRegionInstanceGroupManagerUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.versionInput">versionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersion">ComputeRegionInstanceGroupManagerVersion</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.waitForInstancesInput">waitForInstancesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.waitForInstancesStatusInput">waitForInstancesStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.baseInstanceName">baseInstanceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.distributionPolicyTargetShape">distributionPolicyTargetShape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.distributionPolicyZones">distributionPolicyZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.listManagedInstancesResults">listManagedInstancesResults</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.targetPools">targetPools</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.targetSize">targetSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.waitForInstances">waitForInstances</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.waitForInstancesStatus">waitForInstancesStatus</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `autoHealingPolicies`<sup>Required</sup> <a name="autoHealingPolicies" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.autoHealingPolicies"></a>

```typescript
public readonly autoHealingPolicies: ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference">ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference</a>

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.fingerprint"></a>

```typescript
public readonly fingerprint: string;
```

- *Type:* string

---

##### `instanceGroup`<sup>Required</sup> <a name="instanceGroup" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.instanceGroup"></a>

```typescript
public readonly instanceGroup: string;
```

- *Type:* string

---

##### `namedPort`<sup>Required</sup> <a name="namedPort" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.namedPort"></a>

```typescript
public readonly namedPort: ComputeRegionInstanceGroupManagerNamedPortList;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortList">ComputeRegionInstanceGroupManagerNamedPortList</a>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `statefulDisk`<sup>Required</sup> <a name="statefulDisk" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.statefulDisk"></a>

```typescript
public readonly statefulDisk: ComputeRegionInstanceGroupManagerStatefulDiskList;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskList">ComputeRegionInstanceGroupManagerStatefulDiskList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.status"></a>

```typescript
public readonly status: ComputeRegionInstanceGroupManagerStatusList;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusList">ComputeRegionInstanceGroupManagerStatusList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeRegionInstanceGroupManagerTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference">ComputeRegionInstanceGroupManagerTimeoutsOutputReference</a>

---

##### `updatePolicy`<sup>Required</sup> <a name="updatePolicy" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.updatePolicy"></a>

```typescript
public readonly updatePolicy: ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference">ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.version"></a>

```typescript
public readonly version: ComputeRegionInstanceGroupManagerVersionList;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionList">ComputeRegionInstanceGroupManagerVersionList</a>

---

##### `autoHealingPoliciesInput`<sup>Optional</sup> <a name="autoHealingPoliciesInput" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.autoHealingPoliciesInput"></a>

```typescript
public readonly autoHealingPoliciesInput: ComputeRegionInstanceGroupManagerAutoHealingPolicies;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPolicies">ComputeRegionInstanceGroupManagerAutoHealingPolicies</a>

---

##### `baseInstanceNameInput`<sup>Optional</sup> <a name="baseInstanceNameInput" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.baseInstanceNameInput"></a>

```typescript
public readonly baseInstanceNameInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `distributionPolicyTargetShapeInput`<sup>Optional</sup> <a name="distributionPolicyTargetShapeInput" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.distributionPolicyTargetShapeInput"></a>

```typescript
public readonly distributionPolicyTargetShapeInput: string;
```

- *Type:* string

---

##### `distributionPolicyZonesInput`<sup>Optional</sup> <a name="distributionPolicyZonesInput" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.distributionPolicyZonesInput"></a>

```typescript
public readonly distributionPolicyZonesInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `listManagedInstancesResultsInput`<sup>Optional</sup> <a name="listManagedInstancesResultsInput" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.listManagedInstancesResultsInput"></a>

```typescript
public readonly listManagedInstancesResultsInput: string;
```

- *Type:* string

---

##### `namedPortInput`<sup>Optional</sup> <a name="namedPortInput" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.namedPortInput"></a>

```typescript
public readonly namedPortInput: IResolvable | ComputeRegionInstanceGroupManagerNamedPort[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPort">ComputeRegionInstanceGroupManagerNamedPort</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `statefulDiskInput`<sup>Optional</sup> <a name="statefulDiskInput" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.statefulDiskInput"></a>

```typescript
public readonly statefulDiskInput: IResolvable | ComputeRegionInstanceGroupManagerStatefulDisk[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDisk">ComputeRegionInstanceGroupManagerStatefulDisk</a>[]

---

##### `targetPoolsInput`<sup>Optional</sup> <a name="targetPoolsInput" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.targetPoolsInput"></a>

```typescript
public readonly targetPoolsInput: string[];
```

- *Type:* string[]

---

##### `targetSizeInput`<sup>Optional</sup> <a name="targetSizeInput" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.targetSizeInput"></a>

```typescript
public readonly targetSizeInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: ComputeRegionInstanceGroupManagerTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeouts">ComputeRegionInstanceGroupManagerTimeouts</a> | cdktf.IResolvable

---

##### `updatePolicyInput`<sup>Optional</sup> <a name="updatePolicyInput" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.updatePolicyInput"></a>

```typescript
public readonly updatePolicyInput: ComputeRegionInstanceGroupManagerUpdatePolicy;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicy">ComputeRegionInstanceGroupManagerUpdatePolicy</a>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.versionInput"></a>

```typescript
public readonly versionInput: IResolvable | ComputeRegionInstanceGroupManagerVersion[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersion">ComputeRegionInstanceGroupManagerVersion</a>[]

---

##### `waitForInstancesInput`<sup>Optional</sup> <a name="waitForInstancesInput" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.waitForInstancesInput"></a>

```typescript
public readonly waitForInstancesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `waitForInstancesStatusInput`<sup>Optional</sup> <a name="waitForInstancesStatusInput" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.waitForInstancesStatusInput"></a>

```typescript
public readonly waitForInstancesStatusInput: string;
```

- *Type:* string

---

##### `baseInstanceName`<sup>Required</sup> <a name="baseInstanceName" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.baseInstanceName"></a>

```typescript
public readonly baseInstanceName: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `distributionPolicyTargetShape`<sup>Required</sup> <a name="distributionPolicyTargetShape" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.distributionPolicyTargetShape"></a>

```typescript
public readonly distributionPolicyTargetShape: string;
```

- *Type:* string

---

##### `distributionPolicyZones`<sup>Required</sup> <a name="distributionPolicyZones" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.distributionPolicyZones"></a>

```typescript
public readonly distributionPolicyZones: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `listManagedInstancesResults`<sup>Required</sup> <a name="listManagedInstancesResults" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.listManagedInstancesResults"></a>

```typescript
public readonly listManagedInstancesResults: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `targetPools`<sup>Required</sup> <a name="targetPools" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.targetPools"></a>

```typescript
public readonly targetPools: string[];
```

- *Type:* string[]

---

##### `targetSize`<sup>Required</sup> <a name="targetSize" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.targetSize"></a>

```typescript
public readonly targetSize: number;
```

- *Type:* number

---

##### `waitForInstances`<sup>Required</sup> <a name="waitForInstances" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.waitForInstances"></a>

```typescript
public readonly waitForInstances: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `waitForInstancesStatus`<sup>Required</sup> <a name="waitForInstancesStatus" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.waitForInstancesStatus"></a>

```typescript
public readonly waitForInstancesStatus: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRegionInstanceGroupManagerAutoHealingPolicies <a name="ComputeRegionInstanceGroupManagerAutoHealingPolicies" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPolicies.Initializer"></a>

```typescript
import { computeRegionInstanceGroupManager } from '@cdktf/provider-google'

const computeRegionInstanceGroupManagerAutoHealingPolicies: computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPolicies = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPolicies.property.healthCheck">healthCheck</a></code> | <code>string</code> | The health check resource that signals autohealing. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPolicies.property.initialDelaySec">initialDelaySec</a></code> | <code>number</code> | The number of seconds that the managed instance group waits before it applies autohealing policies to new instances or recently recreated instances. |

---

##### `healthCheck`<sup>Required</sup> <a name="healthCheck" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPolicies.property.healthCheck"></a>

```typescript
public readonly healthCheck: string;
```

- *Type:* string

The health check resource that signals autohealing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_region_instance_group_manager#health_check ComputeRegionInstanceGroupManager#health_check}

---

##### `initialDelaySec`<sup>Required</sup> <a name="initialDelaySec" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPolicies.property.initialDelaySec"></a>

```typescript
public readonly initialDelaySec: number;
```

- *Type:* number

The number of seconds that the managed instance group waits before it applies autohealing policies to new instances or recently recreated instances.

Between 0 and 3600.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_region_instance_group_manager#initial_delay_sec ComputeRegionInstanceGroupManager#initial_delay_sec}

---

### ComputeRegionInstanceGroupManagerConfig <a name="ComputeRegionInstanceGroupManagerConfig" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.Initializer"></a>

```typescript
import { computeRegionInstanceGroupManager } from '@cdktf/provider-google'

const computeRegionInstanceGroupManagerConfig: computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.baseInstanceName">baseInstanceName</a></code> | <code>string</code> | The base instance name to use for instances in this group. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.name">name</a></code> | <code>string</code> | The name of the instance group manager. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.version">version</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersion">ComputeRegionInstanceGroupManagerVersion</a>[]</code> | version block. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.autoHealingPolicies">autoHealingPolicies</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPolicies">ComputeRegionInstanceGroupManagerAutoHealingPolicies</a></code> | auto_healing_policies block. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.description">description</a></code> | <code>string</code> | An optional textual description of the instance group manager. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.distributionPolicyTargetShape">distributionPolicyTargetShape</a></code> | <code>string</code> | The shape to which the group converges either proactively or on resize events (depending on the value set in updatePolicy.instanceRedistributionType). |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.distributionPolicyZones">distributionPolicyZones</a></code> | <code>string[]</code> | The distribution policy for this managed instance group. You can specify one or more values. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_region_instance_group_manager#id ComputeRegionInstanceGroupManager#id}. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.listManagedInstancesResults">listManagedInstancesResults</a></code> | <code>string</code> | Pagination behavior of the listManagedInstances API method for this managed instance group. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.namedPort">namedPort</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPort">ComputeRegionInstanceGroupManagerNamedPort</a>[]</code> | named_port block. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.project">project</a></code> | <code>string</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.region">region</a></code> | <code>string</code> | The region where the managed instance group resides. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.statefulDisk">statefulDisk</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDisk">ComputeRegionInstanceGroupManagerStatefulDisk</a>[]</code> | stateful_disk block. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.targetPools">targetPools</a></code> | <code>string[]</code> | The full URL of all target pools to which new instances in the group are added. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.targetSize">targetSize</a></code> | <code>number</code> | The target number of running instances for this managed instance group. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeouts">ComputeRegionInstanceGroupManagerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.updatePolicy">updatePolicy</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicy">ComputeRegionInstanceGroupManagerUpdatePolicy</a></code> | update_policy block. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.waitForInstances">waitForInstances</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to wait for all instances to be created/updated before returning. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.waitForInstancesStatus">waitForInstancesStatus</a></code> | <code>string</code> | When used with wait_for_instances specifies the status to wait for. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `baseInstanceName`<sup>Required</sup> <a name="baseInstanceName" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.baseInstanceName"></a>

```typescript
public readonly baseInstanceName: string;
```

- *Type:* string

The base instance name to use for instances in this group.

The value must be a valid RFC1035 name. Supported characters are lowercase letters, numbers, and hyphens (-). Instances are named by appending a hyphen and a random four-character string to the base instance name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_region_instance_group_manager#base_instance_name ComputeRegionInstanceGroupManager#base_instance_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the instance group manager.

Must be 1-63 characters long and comply with RFC1035. Supported characters include lowercase letters, numbers, and hyphens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_region_instance_group_manager#name ComputeRegionInstanceGroupManager#name}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.version"></a>

```typescript
public readonly version: IResolvable | ComputeRegionInstanceGroupManagerVersion[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersion">ComputeRegionInstanceGroupManagerVersion</a>[]

version block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_region_instance_group_manager#version ComputeRegionInstanceGroupManager#version}

---

##### `autoHealingPolicies`<sup>Optional</sup> <a name="autoHealingPolicies" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.autoHealingPolicies"></a>

```typescript
public readonly autoHealingPolicies: ComputeRegionInstanceGroupManagerAutoHealingPolicies;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPolicies">ComputeRegionInstanceGroupManagerAutoHealingPolicies</a>

auto_healing_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_region_instance_group_manager#auto_healing_policies ComputeRegionInstanceGroupManager#auto_healing_policies}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional textual description of the instance group manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_region_instance_group_manager#description ComputeRegionInstanceGroupManager#description}

---

##### `distributionPolicyTargetShape`<sup>Optional</sup> <a name="distributionPolicyTargetShape" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.distributionPolicyTargetShape"></a>

```typescript
public readonly distributionPolicyTargetShape: string;
```

- *Type:* string

The shape to which the group converges either proactively or on resize events (depending on the value set in updatePolicy.instanceRedistributionType).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_region_instance_group_manager#distribution_policy_target_shape ComputeRegionInstanceGroupManager#distribution_policy_target_shape}

---

##### `distributionPolicyZones`<sup>Optional</sup> <a name="distributionPolicyZones" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.distributionPolicyZones"></a>

```typescript
public readonly distributionPolicyZones: string[];
```

- *Type:* string[]

The distribution policy for this managed instance group. You can specify one or more values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_region_instance_group_manager#distribution_policy_zones ComputeRegionInstanceGroupManager#distribution_policy_zones}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_region_instance_group_manager#id ComputeRegionInstanceGroupManager#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `listManagedInstancesResults`<sup>Optional</sup> <a name="listManagedInstancesResults" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.listManagedInstancesResults"></a>

```typescript
public readonly listManagedInstancesResults: string;
```

- *Type:* string

Pagination behavior of the listManagedInstances API method for this managed instance group.

Valid values are: "PAGELESS", "PAGINATED". If PAGELESS (default), Pagination is disabled for the group's listManagedInstances API method. maxResults and pageToken query parameters are ignored and all instances are returned in a single response. If PAGINATED, pagination is enabled, maxResults and pageToken query parameters are respected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_region_instance_group_manager#list_managed_instances_results ComputeRegionInstanceGroupManager#list_managed_instances_results}

---

##### `namedPort`<sup>Optional</sup> <a name="namedPort" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.namedPort"></a>

```typescript
public readonly namedPort: IResolvable | ComputeRegionInstanceGroupManagerNamedPort[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPort">ComputeRegionInstanceGroupManagerNamedPort</a>[]

named_port block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_region_instance_group_manager#named_port ComputeRegionInstanceGroupManager#named_port}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_region_instance_group_manager#project ComputeRegionInstanceGroupManager#project}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The region where the managed instance group resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_region_instance_group_manager#region ComputeRegionInstanceGroupManager#region}

---

##### `statefulDisk`<sup>Optional</sup> <a name="statefulDisk" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.statefulDisk"></a>

```typescript
public readonly statefulDisk: IResolvable | ComputeRegionInstanceGroupManagerStatefulDisk[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDisk">ComputeRegionInstanceGroupManagerStatefulDisk</a>[]

stateful_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_region_instance_group_manager#stateful_disk ComputeRegionInstanceGroupManager#stateful_disk}

---

##### `targetPools`<sup>Optional</sup> <a name="targetPools" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.targetPools"></a>

```typescript
public readonly targetPools: string[];
```

- *Type:* string[]

The full URL of all target pools to which new instances in the group are added.

Updating the target pools attribute does not affect existing instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_region_instance_group_manager#target_pools ComputeRegionInstanceGroupManager#target_pools}

---

##### `targetSize`<sup>Optional</sup> <a name="targetSize" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.targetSize"></a>

```typescript
public readonly targetSize: number;
```

- *Type:* number

The target number of running instances for this managed instance group.

This value should always be explicitly set unless this resource is attached to an autoscaler, in which case it should never be set. Defaults to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_region_instance_group_manager#target_size ComputeRegionInstanceGroupManager#target_size}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeRegionInstanceGroupManagerTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeouts">ComputeRegionInstanceGroupManagerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_region_instance_group_manager#timeouts ComputeRegionInstanceGroupManager#timeouts}

---

##### `updatePolicy`<sup>Optional</sup> <a name="updatePolicy" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.updatePolicy"></a>

```typescript
public readonly updatePolicy: ComputeRegionInstanceGroupManagerUpdatePolicy;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicy">ComputeRegionInstanceGroupManagerUpdatePolicy</a>

update_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_region_instance_group_manager#update_policy ComputeRegionInstanceGroupManager#update_policy}

---

##### `waitForInstances`<sup>Optional</sup> <a name="waitForInstances" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.waitForInstances"></a>

```typescript
public readonly waitForInstances: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to wait for all instances to be created/updated before returning.

Note that if this is set to true and the operation does not succeed, Terraform will continue trying until it times out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_region_instance_group_manager#wait_for_instances ComputeRegionInstanceGroupManager#wait_for_instances}

---

##### `waitForInstancesStatus`<sup>Optional</sup> <a name="waitForInstancesStatus" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.waitForInstancesStatus"></a>

```typescript
public readonly waitForInstancesStatus: string;
```

- *Type:* string

When used with wait_for_instances specifies the status to wait for.

When STABLE is specified this resource will wait until the instances are stable before returning. When UPDATED is set, it will wait for the version target to be reached and any per instance configs to be effective as well as all instances to be stable before returning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_region_instance_group_manager#wait_for_instances_status ComputeRegionInstanceGroupManager#wait_for_instances_status}

---

### ComputeRegionInstanceGroupManagerNamedPort <a name="ComputeRegionInstanceGroupManagerNamedPort" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPort"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPort.Initializer"></a>

```typescript
import { computeRegionInstanceGroupManager } from '@cdktf/provider-google'

const computeRegionInstanceGroupManagerNamedPort: computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPort = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPort.property.name">name</a></code> | <code>string</code> | The name of the port. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPort.property.port">port</a></code> | <code>number</code> | The port number. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPort.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_region_instance_group_manager#name ComputeRegionInstanceGroupManager#name}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPort.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The port number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_region_instance_group_manager#port ComputeRegionInstanceGroupManager#port}

---

### ComputeRegionInstanceGroupManagerStatefulDisk <a name="ComputeRegionInstanceGroupManagerStatefulDisk" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDisk.Initializer"></a>

```typescript
import { computeRegionInstanceGroupManager } from '@cdktf/provider-google'

const computeRegionInstanceGroupManagerStatefulDisk: computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDisk = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDisk.property.deviceName">deviceName</a></code> | <code>string</code> | The device name of the disk to be attached. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDisk.property.deleteRule">deleteRule</a></code> | <code>string</code> | A value that prescribes what should happen to the stateful disk when the VM instance is deleted. |

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDisk.property.deviceName"></a>

```typescript
public readonly deviceName: string;
```

- *Type:* string

The device name of the disk to be attached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_region_instance_group_manager#device_name ComputeRegionInstanceGroupManager#device_name}

---

##### `deleteRule`<sup>Optional</sup> <a name="deleteRule" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDisk.property.deleteRule"></a>

```typescript
public readonly deleteRule: string;
```

- *Type:* string

A value that prescribes what should happen to the stateful disk when the VM instance is deleted.

The available options are NEVER and ON_PERMANENT_INSTANCE_DELETION. NEVER - detach the disk when the VM is deleted, but do not delete the disk. ON_PERMANENT_INSTANCE_DELETION will delete the stateful disk when the VM is permanently deleted from the instance group. The default is NEVER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_region_instance_group_manager#delete_rule ComputeRegionInstanceGroupManager#delete_rule}

---

### ComputeRegionInstanceGroupManagerStatus <a name="ComputeRegionInstanceGroupManagerStatus" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatus.Initializer"></a>

```typescript
import { computeRegionInstanceGroupManager } from '@cdktf/provider-google'

const computeRegionInstanceGroupManagerStatus: computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatus = { ... }
```


### ComputeRegionInstanceGroupManagerStatusStateful <a name="ComputeRegionInstanceGroupManagerStatusStateful" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStateful"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStateful.Initializer"></a>

```typescript
import { computeRegionInstanceGroupManager } from '@cdktf/provider-google'

const computeRegionInstanceGroupManagerStatusStateful: computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStateful = { ... }
```


### ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigs <a name="ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigs" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigs.Initializer"></a>

```typescript
import { computeRegionInstanceGroupManager } from '@cdktf/provider-google'

const computeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigs: computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigs = { ... }
```


### ComputeRegionInstanceGroupManagerStatusVersionTarget <a name="ComputeRegionInstanceGroupManagerStatusVersionTarget" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTarget.Initializer"></a>

```typescript
import { computeRegionInstanceGroupManager } from '@cdktf/provider-google'

const computeRegionInstanceGroupManagerStatusVersionTarget: computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTarget = { ... }
```


### ComputeRegionInstanceGroupManagerTimeouts <a name="ComputeRegionInstanceGroupManagerTimeouts" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeouts.Initializer"></a>

```typescript
import { computeRegionInstanceGroupManager } from '@cdktf/provider-google'

const computeRegionInstanceGroupManagerTimeouts: computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_region_instance_group_manager#create ComputeRegionInstanceGroupManager#create}. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_region_instance_group_manager#delete ComputeRegionInstanceGroupManager#delete}. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_region_instance_group_manager#update ComputeRegionInstanceGroupManager#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_region_instance_group_manager#create ComputeRegionInstanceGroupManager#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_region_instance_group_manager#delete ComputeRegionInstanceGroupManager#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_region_instance_group_manager#update ComputeRegionInstanceGroupManager#update}.

---

### ComputeRegionInstanceGroupManagerUpdatePolicy <a name="ComputeRegionInstanceGroupManagerUpdatePolicy" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicy.Initializer"></a>

```typescript
import { computeRegionInstanceGroupManager } from '@cdktf/provider-google'

const computeRegionInstanceGroupManagerUpdatePolicy: computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicy.property.minimalAction">minimalAction</a></code> | <code>string</code> | Minimal action to be taken on an instance. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicy.property.type">type</a></code> | <code>string</code> | The type of update process. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicy.property.instanceRedistributionType">instanceRedistributionType</a></code> | <code>string</code> | The instance redistribution policy for regional managed instance groups. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicy.property.maxSurgeFixed">maxSurgeFixed</a></code> | <code>number</code> | The maximum number of instances that can be created above the specified targetSize during the update process. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicy.property.maxSurgePercent">maxSurgePercent</a></code> | <code>number</code> | The maximum number of instances(calculated as percentage) that can be created above the specified targetSize during the update process. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicy.property.maxUnavailableFixed">maxUnavailableFixed</a></code> | <code>number</code> | The maximum number of instances that can be unavailable during the update process. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicy.property.maxUnavailablePercent">maxUnavailablePercent</a></code> | <code>number</code> | The maximum number of instances(calculated as percentage) that can be unavailable during the update process. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicy.property.mostDisruptiveAllowedAction">mostDisruptiveAllowedAction</a></code> | <code>string</code> | Most disruptive action that is allowed to be taken on an instance. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicy.property.replacementMethod">replacementMethod</a></code> | <code>string</code> | The instance replacement method for regional managed instance groups. |

---

##### `minimalAction`<sup>Required</sup> <a name="minimalAction" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicy.property.minimalAction"></a>

```typescript
public readonly minimalAction: string;
```

- *Type:* string

Minimal action to be taken on an instance.

You can specify either REFRESH to update without stopping instances, RESTART to restart existing instances or REPLACE to delete and create new instances from the target template. If you specify a REFRESH, the Updater will attempt to perform that action only. However, if the Updater determines that the minimal action you specify is not enough to perform the update, it might perform a more disruptive action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_region_instance_group_manager#minimal_action ComputeRegionInstanceGroupManager#minimal_action}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicy.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of update process.

You can specify either PROACTIVE so that the instance group manager proactively executes actions in order to bring instances to their target versions or OPPORTUNISTIC so that no action is proactively executed but the update will be performed as part of other actions (for example, resizes or recreateInstances calls).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_region_instance_group_manager#type ComputeRegionInstanceGroupManager#type}

---

##### `instanceRedistributionType`<sup>Optional</sup> <a name="instanceRedistributionType" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicy.property.instanceRedistributionType"></a>

```typescript
public readonly instanceRedistributionType: string;
```

- *Type:* string

The instance redistribution policy for regional managed instance groups.

Valid values are: "PROACTIVE", "NONE". If PROACTIVE (default), the group attempts to maintain an even distribution of VM instances across zones in the region. If NONE, proactive redistribution is disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_region_instance_group_manager#instance_redistribution_type ComputeRegionInstanceGroupManager#instance_redistribution_type}

---

##### `maxSurgeFixed`<sup>Optional</sup> <a name="maxSurgeFixed" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicy.property.maxSurgeFixed"></a>

```typescript
public readonly maxSurgeFixed: number;
```

- *Type:* number

The maximum number of instances that can be created above the specified targetSize during the update process.

Conflicts with max_surge_percent. It has to be either 0 or at least equal to the number of zones. If fixed values are used, at least one of max_unavailable_fixed or max_surge_fixed must be greater than 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_region_instance_group_manager#max_surge_fixed ComputeRegionInstanceGroupManager#max_surge_fixed}

---

##### `maxSurgePercent`<sup>Optional</sup> <a name="maxSurgePercent" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicy.property.maxSurgePercent"></a>

```typescript
public readonly maxSurgePercent: number;
```

- *Type:* number

The maximum number of instances(calculated as percentage) that can be created above the specified targetSize during the update process.

Conflicts with max_surge_fixed. Percent value is only allowed for regional managed instance groups with size at least 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_region_instance_group_manager#max_surge_percent ComputeRegionInstanceGroupManager#max_surge_percent}

---

##### `maxUnavailableFixed`<sup>Optional</sup> <a name="maxUnavailableFixed" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicy.property.maxUnavailableFixed"></a>

```typescript
public readonly maxUnavailableFixed: number;
```

- *Type:* number

The maximum number of instances that can be unavailable during the update process.

Conflicts with max_unavailable_percent. It has to be either 0 or at least equal to the number of zones. If fixed values are used, at least one of max_unavailable_fixed or max_surge_fixed must be greater than 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_region_instance_group_manager#max_unavailable_fixed ComputeRegionInstanceGroupManager#max_unavailable_fixed}

---

##### `maxUnavailablePercent`<sup>Optional</sup> <a name="maxUnavailablePercent" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicy.property.maxUnavailablePercent"></a>

```typescript
public readonly maxUnavailablePercent: number;
```

- *Type:* number

The maximum number of instances(calculated as percentage) that can be unavailable during the update process.

Conflicts with max_unavailable_fixed. Percent value is only allowed for regional managed instance groups with size at least 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_region_instance_group_manager#max_unavailable_percent ComputeRegionInstanceGroupManager#max_unavailable_percent}

---

##### `mostDisruptiveAllowedAction`<sup>Optional</sup> <a name="mostDisruptiveAllowedAction" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicy.property.mostDisruptiveAllowedAction"></a>

```typescript
public readonly mostDisruptiveAllowedAction: string;
```

- *Type:* string

Most disruptive action that is allowed to be taken on an instance.

You can specify either NONE to forbid any actions, REFRESH to allow actions that do not need instance restart, RESTART to allow actions that can be applied without instance replacing or REPLACE to allow all possible actions. If the Updater determines that the minimal update action needed is more disruptive than most disruptive allowed action you specify it will not perform the update at all.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_region_instance_group_manager#most_disruptive_allowed_action ComputeRegionInstanceGroupManager#most_disruptive_allowed_action}

---

##### `replacementMethod`<sup>Optional</sup> <a name="replacementMethod" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicy.property.replacementMethod"></a>

```typescript
public readonly replacementMethod: string;
```

- *Type:* string

The instance replacement method for regional managed instance groups.

Valid values are: "RECREATE", "SUBSTITUTE". If SUBSTITUTE (default), the group replaces VM instances with new instances that have randomly generated names. If RECREATE, instance names are preserved.  You must also set max_unavailable_fixed or max_unavailable_percent to be greater than 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_region_instance_group_manager#replacement_method ComputeRegionInstanceGroupManager#replacement_method}

---

### ComputeRegionInstanceGroupManagerVersion <a name="ComputeRegionInstanceGroupManagerVersion" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersion.Initializer"></a>

```typescript
import { computeRegionInstanceGroupManager } from '@cdktf/provider-google'

const computeRegionInstanceGroupManagerVersion: computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersion = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersion.property.instanceTemplate">instanceTemplate</a></code> | <code>string</code> | The full URL to an instance template from which all new instances of this version will be created. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersion.property.name">name</a></code> | <code>string</code> | Version name. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersion.property.targetSize">targetSize</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSize">ComputeRegionInstanceGroupManagerVersionTargetSize</a></code> | target_size block. |

---

##### `instanceTemplate`<sup>Required</sup> <a name="instanceTemplate" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersion.property.instanceTemplate"></a>

```typescript
public readonly instanceTemplate: string;
```

- *Type:* string

The full URL to an instance template from which all new instances of this version will be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_region_instance_group_manager#instance_template ComputeRegionInstanceGroupManager#instance_template}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersion.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Version name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_region_instance_group_manager#name ComputeRegionInstanceGroupManager#name}

---

##### `targetSize`<sup>Optional</sup> <a name="targetSize" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersion.property.targetSize"></a>

```typescript
public readonly targetSize: ComputeRegionInstanceGroupManagerVersionTargetSize;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSize">ComputeRegionInstanceGroupManagerVersionTargetSize</a>

target_size block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_region_instance_group_manager#target_size ComputeRegionInstanceGroupManager#target_size}

---

### ComputeRegionInstanceGroupManagerVersionTargetSize <a name="ComputeRegionInstanceGroupManagerVersionTargetSize" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSize"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSize.Initializer"></a>

```typescript
import { computeRegionInstanceGroupManager } from '@cdktf/provider-google'

const computeRegionInstanceGroupManagerVersionTargetSize: computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSize = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSize.property.fixed">fixed</a></code> | <code>number</code> | The number of instances which are managed for this version. Conflicts with percent. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSize.property.percent">percent</a></code> | <code>number</code> | The number of instances (calculated as percentage) which are managed for this version. |

---

##### `fixed`<sup>Optional</sup> <a name="fixed" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSize.property.fixed"></a>

```typescript
public readonly fixed: number;
```

- *Type:* number

The number of instances which are managed for this version. Conflicts with percent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_region_instance_group_manager#fixed ComputeRegionInstanceGroupManager#fixed}

---

##### `percent`<sup>Optional</sup> <a name="percent" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSize.property.percent"></a>

```typescript
public readonly percent: number;
```

- *Type:* number

The number of instances (calculated as percentage) which are managed for this version.

Conflicts with fixed. Note that when using percent, rounding will be in favor of explicitly set target_size values; a managed instance group with 2 instances and 2 versions, one of which has a target_size.percent of 60 will create 2 instances of that version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_region_instance_group_manager#percent ComputeRegionInstanceGroupManager#percent}

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference <a name="ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.Initializer"></a>

```typescript
import { computeRegionInstanceGroupManager } from '@cdktf/provider-google'

new computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.property.healthCheckInput">healthCheckInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.property.initialDelaySecInput">initialDelaySecInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.property.healthCheck">healthCheck</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.property.initialDelaySec">initialDelaySec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPolicies">ComputeRegionInstanceGroupManagerAutoHealingPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `healthCheckInput`<sup>Optional</sup> <a name="healthCheckInput" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.property.healthCheckInput"></a>

```typescript
public readonly healthCheckInput: string;
```

- *Type:* string

---

##### `initialDelaySecInput`<sup>Optional</sup> <a name="initialDelaySecInput" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.property.initialDelaySecInput"></a>

```typescript
public readonly initialDelaySecInput: number;
```

- *Type:* number

---

##### `healthCheck`<sup>Required</sup> <a name="healthCheck" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.property.healthCheck"></a>

```typescript
public readonly healthCheck: string;
```

- *Type:* string

---

##### `initialDelaySec`<sup>Required</sup> <a name="initialDelaySec" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.property.initialDelaySec"></a>

```typescript
public readonly initialDelaySec: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeRegionInstanceGroupManagerAutoHealingPolicies;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPolicies">ComputeRegionInstanceGroupManagerAutoHealingPolicies</a>

---


### ComputeRegionInstanceGroupManagerNamedPortList <a name="ComputeRegionInstanceGroupManagerNamedPortList" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortList.Initializer"></a>

```typescript
import { computeRegionInstanceGroupManager } from '@cdktf/provider-google'

new computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortList.get"></a>

```typescript
public get(index: number): ComputeRegionInstanceGroupManagerNamedPortOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPort">ComputeRegionInstanceGroupManagerNamedPort</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeRegionInstanceGroupManagerNamedPort[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPort">ComputeRegionInstanceGroupManagerNamedPort</a>[]

---


### ComputeRegionInstanceGroupManagerNamedPortOutputReference <a name="ComputeRegionInstanceGroupManagerNamedPortOutputReference" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.Initializer"></a>

```typescript
import { computeRegionInstanceGroupManager } from '@cdktf/provider-google'

new computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPort">ComputeRegionInstanceGroupManagerNamedPort</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeRegionInstanceGroupManagerNamedPort | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPort">ComputeRegionInstanceGroupManagerNamedPort</a> | cdktf.IResolvable

---


### ComputeRegionInstanceGroupManagerStatefulDiskList <a name="ComputeRegionInstanceGroupManagerStatefulDiskList" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskList.Initializer"></a>

```typescript
import { computeRegionInstanceGroupManager } from '@cdktf/provider-google'

new computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskList.get"></a>

```typescript
public get(index: number): ComputeRegionInstanceGroupManagerStatefulDiskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDisk">ComputeRegionInstanceGroupManagerStatefulDisk</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeRegionInstanceGroupManagerStatefulDisk[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDisk">ComputeRegionInstanceGroupManagerStatefulDisk</a>[]

---


### ComputeRegionInstanceGroupManagerStatefulDiskOutputReference <a name="ComputeRegionInstanceGroupManagerStatefulDiskOutputReference" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.Initializer"></a>

```typescript
import { computeRegionInstanceGroupManager } from '@cdktf/provider-google'

new computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.resetDeleteRule">resetDeleteRule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeleteRule` <a name="resetDeleteRule" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.resetDeleteRule"></a>

```typescript
public resetDeleteRule(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.property.deleteRuleInput">deleteRuleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.property.deviceNameInput">deviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.property.deleteRule">deleteRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.property.deviceName">deviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDisk">ComputeRegionInstanceGroupManagerStatefulDisk</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deleteRuleInput`<sup>Optional</sup> <a name="deleteRuleInput" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.property.deleteRuleInput"></a>

```typescript
public readonly deleteRuleInput: string;
```

- *Type:* string

---

##### `deviceNameInput`<sup>Optional</sup> <a name="deviceNameInput" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.property.deviceNameInput"></a>

```typescript
public readonly deviceNameInput: string;
```

- *Type:* string

---

##### `deleteRule`<sup>Required</sup> <a name="deleteRule" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.property.deleteRule"></a>

```typescript
public readonly deleteRule: string;
```

- *Type:* string

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.property.deviceName"></a>

```typescript
public readonly deviceName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeRegionInstanceGroupManagerStatefulDisk | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDisk">ComputeRegionInstanceGroupManagerStatefulDisk</a> | cdktf.IResolvable

---


### ComputeRegionInstanceGroupManagerStatusList <a name="ComputeRegionInstanceGroupManagerStatusList" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusList.Initializer"></a>

```typescript
import { computeRegionInstanceGroupManager } from '@cdktf/provider-google'

new computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusList.get"></a>

```typescript
public get(index: number): ComputeRegionInstanceGroupManagerStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ComputeRegionInstanceGroupManagerStatusOutputReference <a name="ComputeRegionInstanceGroupManagerStatusOutputReference" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.Initializer"></a>

```typescript
import { computeRegionInstanceGroupManager } from '@cdktf/provider-google'

new computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.property.isStable">isStable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.property.stateful">stateful</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulList">ComputeRegionInstanceGroupManagerStatusStatefulList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.property.versionTarget">versionTarget</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetList">ComputeRegionInstanceGroupManagerStatusVersionTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatus">ComputeRegionInstanceGroupManagerStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isStable`<sup>Required</sup> <a name="isStable" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.property.isStable"></a>

```typescript
public readonly isStable: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `stateful`<sup>Required</sup> <a name="stateful" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.property.stateful"></a>

```typescript
public readonly stateful: ComputeRegionInstanceGroupManagerStatusStatefulList;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulList">ComputeRegionInstanceGroupManagerStatusStatefulList</a>

---

##### `versionTarget`<sup>Required</sup> <a name="versionTarget" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.property.versionTarget"></a>

```typescript
public readonly versionTarget: ComputeRegionInstanceGroupManagerStatusVersionTargetList;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetList">ComputeRegionInstanceGroupManagerStatusVersionTargetList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeRegionInstanceGroupManagerStatus;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatus">ComputeRegionInstanceGroupManagerStatus</a>

---


### ComputeRegionInstanceGroupManagerStatusStatefulList <a name="ComputeRegionInstanceGroupManagerStatusStatefulList" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulList.Initializer"></a>

```typescript
import { computeRegionInstanceGroupManager } from '@cdktf/provider-google'

new computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulList.get"></a>

```typescript
public get(index: number): ComputeRegionInstanceGroupManagerStatusStatefulOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ComputeRegionInstanceGroupManagerStatusStatefulOutputReference <a name="ComputeRegionInstanceGroupManagerStatusStatefulOutputReference" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.Initializer"></a>

```typescript
import { computeRegionInstanceGroupManager } from '@cdktf/provider-google'

new computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.property.hasStatefulConfig">hasStatefulConfig</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.property.perInstanceConfigs">perInstanceConfigs</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList">ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStateful">ComputeRegionInstanceGroupManagerStatusStateful</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hasStatefulConfig`<sup>Required</sup> <a name="hasStatefulConfig" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.property.hasStatefulConfig"></a>

```typescript
public readonly hasStatefulConfig: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `perInstanceConfigs`<sup>Required</sup> <a name="perInstanceConfigs" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.property.perInstanceConfigs"></a>

```typescript
public readonly perInstanceConfigs: ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList">ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeRegionInstanceGroupManagerStatusStateful;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStateful">ComputeRegionInstanceGroupManagerStatusStateful</a>

---


### ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList <a name="ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer"></a>

```typescript
import { computeRegionInstanceGroupManager } from '@cdktf/provider-google'

new computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.get"></a>

```typescript
public get(index: number): ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference <a name="ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer"></a>

```typescript
import { computeRegionInstanceGroupManager } from '@cdktf/provider-google'

new computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.allEffective">allEffective</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigs">ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allEffective`<sup>Required</sup> <a name="allEffective" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.allEffective"></a>

```typescript
public readonly allEffective: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigs;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigs">ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigs</a>

---


### ComputeRegionInstanceGroupManagerStatusVersionTargetList <a name="ComputeRegionInstanceGroupManagerStatusVersionTargetList" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetList.Initializer"></a>

```typescript
import { computeRegionInstanceGroupManager } from '@cdktf/provider-google'

new computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetList.get"></a>

```typescript
public get(index: number): ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference <a name="ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.Initializer"></a>

```typescript
import { computeRegionInstanceGroupManager } from '@cdktf/provider-google'

new computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.property.isReached">isReached</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTarget">ComputeRegionInstanceGroupManagerStatusVersionTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isReached`<sup>Required</sup> <a name="isReached" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.property.isReached"></a>

```typescript
public readonly isReached: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeRegionInstanceGroupManagerStatusVersionTarget;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTarget">ComputeRegionInstanceGroupManagerStatusVersionTarget</a>

---


### ComputeRegionInstanceGroupManagerTimeoutsOutputReference <a name="ComputeRegionInstanceGroupManagerTimeoutsOutputReference" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.Initializer"></a>

```typescript
import { computeRegionInstanceGroupManager } from '@cdktf/provider-google'

new computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeouts">ComputeRegionInstanceGroupManagerTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeRegionInstanceGroupManagerTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeouts">ComputeRegionInstanceGroupManagerTimeouts</a> | cdktf.IResolvable

---


### ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference <a name="ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.Initializer"></a>

```typescript
import { computeRegionInstanceGroupManager } from '@cdktf/provider-google'

new computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.resetInstanceRedistributionType">resetInstanceRedistributionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.resetMaxSurgeFixed">resetMaxSurgeFixed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.resetMaxSurgePercent">resetMaxSurgePercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.resetMaxUnavailableFixed">resetMaxUnavailableFixed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.resetMaxUnavailablePercent">resetMaxUnavailablePercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.resetMostDisruptiveAllowedAction">resetMostDisruptiveAllowedAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.resetReplacementMethod">resetReplacementMethod</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInstanceRedistributionType` <a name="resetInstanceRedistributionType" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.resetInstanceRedistributionType"></a>

```typescript
public resetInstanceRedistributionType(): void
```

##### `resetMaxSurgeFixed` <a name="resetMaxSurgeFixed" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.resetMaxSurgeFixed"></a>

```typescript
public resetMaxSurgeFixed(): void
```

##### `resetMaxSurgePercent` <a name="resetMaxSurgePercent" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.resetMaxSurgePercent"></a>

```typescript
public resetMaxSurgePercent(): void
```

##### `resetMaxUnavailableFixed` <a name="resetMaxUnavailableFixed" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.resetMaxUnavailableFixed"></a>

```typescript
public resetMaxUnavailableFixed(): void
```

##### `resetMaxUnavailablePercent` <a name="resetMaxUnavailablePercent" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.resetMaxUnavailablePercent"></a>

```typescript
public resetMaxUnavailablePercent(): void
```

##### `resetMostDisruptiveAllowedAction` <a name="resetMostDisruptiveAllowedAction" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.resetMostDisruptiveAllowedAction"></a>

```typescript
public resetMostDisruptiveAllowedAction(): void
```

##### `resetReplacementMethod` <a name="resetReplacementMethod" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.resetReplacementMethod"></a>

```typescript
public resetReplacementMethod(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.instanceRedistributionTypeInput">instanceRedistributionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgeFixedInput">maxSurgeFixedInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgePercentInput">maxSurgePercentInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailableFixedInput">maxUnavailableFixedInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailablePercentInput">maxUnavailablePercentInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.minimalActionInput">minimalActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.mostDisruptiveAllowedActionInput">mostDisruptiveAllowedActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.replacementMethodInput">replacementMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.instanceRedistributionType">instanceRedistributionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgeFixed">maxSurgeFixed</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgePercent">maxSurgePercent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailableFixed">maxUnavailableFixed</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailablePercent">maxUnavailablePercent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.minimalAction">minimalAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.mostDisruptiveAllowedAction">mostDisruptiveAllowedAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.replacementMethod">replacementMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicy">ComputeRegionInstanceGroupManagerUpdatePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `instanceRedistributionTypeInput`<sup>Optional</sup> <a name="instanceRedistributionTypeInput" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.instanceRedistributionTypeInput"></a>

```typescript
public readonly instanceRedistributionTypeInput: string;
```

- *Type:* string

---

##### `maxSurgeFixedInput`<sup>Optional</sup> <a name="maxSurgeFixedInput" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgeFixedInput"></a>

```typescript
public readonly maxSurgeFixedInput: number;
```

- *Type:* number

---

##### `maxSurgePercentInput`<sup>Optional</sup> <a name="maxSurgePercentInput" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgePercentInput"></a>

```typescript
public readonly maxSurgePercentInput: number;
```

- *Type:* number

---

##### `maxUnavailableFixedInput`<sup>Optional</sup> <a name="maxUnavailableFixedInput" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailableFixedInput"></a>

```typescript
public readonly maxUnavailableFixedInput: number;
```

- *Type:* number

---

##### `maxUnavailablePercentInput`<sup>Optional</sup> <a name="maxUnavailablePercentInput" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailablePercentInput"></a>

```typescript
public readonly maxUnavailablePercentInput: number;
```

- *Type:* number

---

##### `minimalActionInput`<sup>Optional</sup> <a name="minimalActionInput" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.minimalActionInput"></a>

```typescript
public readonly minimalActionInput: string;
```

- *Type:* string

---

##### `mostDisruptiveAllowedActionInput`<sup>Optional</sup> <a name="mostDisruptiveAllowedActionInput" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.mostDisruptiveAllowedActionInput"></a>

```typescript
public readonly mostDisruptiveAllowedActionInput: string;
```

- *Type:* string

---

##### `replacementMethodInput`<sup>Optional</sup> <a name="replacementMethodInput" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.replacementMethodInput"></a>

```typescript
public readonly replacementMethodInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `instanceRedistributionType`<sup>Required</sup> <a name="instanceRedistributionType" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.instanceRedistributionType"></a>

```typescript
public readonly instanceRedistributionType: string;
```

- *Type:* string

---

##### `maxSurgeFixed`<sup>Required</sup> <a name="maxSurgeFixed" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgeFixed"></a>

```typescript
public readonly maxSurgeFixed: number;
```

- *Type:* number

---

##### `maxSurgePercent`<sup>Required</sup> <a name="maxSurgePercent" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgePercent"></a>

```typescript
public readonly maxSurgePercent: number;
```

- *Type:* number

---

##### `maxUnavailableFixed`<sup>Required</sup> <a name="maxUnavailableFixed" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailableFixed"></a>

```typescript
public readonly maxUnavailableFixed: number;
```

- *Type:* number

---

##### `maxUnavailablePercent`<sup>Required</sup> <a name="maxUnavailablePercent" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailablePercent"></a>

```typescript
public readonly maxUnavailablePercent: number;
```

- *Type:* number

---

##### `minimalAction`<sup>Required</sup> <a name="minimalAction" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.minimalAction"></a>

```typescript
public readonly minimalAction: string;
```

- *Type:* string

---

##### `mostDisruptiveAllowedAction`<sup>Required</sup> <a name="mostDisruptiveAllowedAction" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.mostDisruptiveAllowedAction"></a>

```typescript
public readonly mostDisruptiveAllowedAction: string;
```

- *Type:* string

---

##### `replacementMethod`<sup>Required</sup> <a name="replacementMethod" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.replacementMethod"></a>

```typescript
public readonly replacementMethod: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeRegionInstanceGroupManagerUpdatePolicy;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicy">ComputeRegionInstanceGroupManagerUpdatePolicy</a>

---


### ComputeRegionInstanceGroupManagerVersionList <a name="ComputeRegionInstanceGroupManagerVersionList" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionList.Initializer"></a>

```typescript
import { computeRegionInstanceGroupManager } from '@cdktf/provider-google'

new computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionList.get"></a>

```typescript
public get(index: number): ComputeRegionInstanceGroupManagerVersionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersion">ComputeRegionInstanceGroupManagerVersion</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeRegionInstanceGroupManagerVersion[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersion">ComputeRegionInstanceGroupManagerVersion</a>[]

---


### ComputeRegionInstanceGroupManagerVersionOutputReference <a name="ComputeRegionInstanceGroupManagerVersionOutputReference" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.Initializer"></a>

```typescript
import { computeRegionInstanceGroupManager } from '@cdktf/provider-google'

new computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.putTargetSize">putTargetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.resetTargetSize">resetTargetSize</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTargetSize` <a name="putTargetSize" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.putTargetSize"></a>

```typescript
public putTargetSize(value: ComputeRegionInstanceGroupManagerVersionTargetSize): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.putTargetSize.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSize">ComputeRegionInstanceGroupManagerVersionTargetSize</a>

---

##### `resetName` <a name="resetName" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetTargetSize` <a name="resetTargetSize" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.resetTargetSize"></a>

```typescript
public resetTargetSize(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.property.targetSize">targetSize</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference">ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.property.instanceTemplateInput">instanceTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.property.targetSizeInput">targetSizeInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSize">ComputeRegionInstanceGroupManagerVersionTargetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.property.instanceTemplate">instanceTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersion">ComputeRegionInstanceGroupManagerVersion</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `targetSize`<sup>Required</sup> <a name="targetSize" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.property.targetSize"></a>

```typescript
public readonly targetSize: ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference">ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference</a>

---

##### `instanceTemplateInput`<sup>Optional</sup> <a name="instanceTemplateInput" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.property.instanceTemplateInput"></a>

```typescript
public readonly instanceTemplateInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `targetSizeInput`<sup>Optional</sup> <a name="targetSizeInput" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.property.targetSizeInput"></a>

```typescript
public readonly targetSizeInput: ComputeRegionInstanceGroupManagerVersionTargetSize;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSize">ComputeRegionInstanceGroupManagerVersionTargetSize</a>

---

##### `instanceTemplate`<sup>Required</sup> <a name="instanceTemplate" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.property.instanceTemplate"></a>

```typescript
public readonly instanceTemplate: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeRegionInstanceGroupManagerVersion | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersion">ComputeRegionInstanceGroupManagerVersion</a> | cdktf.IResolvable

---


### ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference <a name="ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.Initializer"></a>

```typescript
import { computeRegionInstanceGroupManager } from '@cdktf/provider-google'

new computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.resetFixed">resetFixed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.resetPercent">resetPercent</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFixed` <a name="resetFixed" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.resetFixed"></a>

```typescript
public resetFixed(): void
```

##### `resetPercent` <a name="resetPercent" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.resetPercent"></a>

```typescript
public resetPercent(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.property.fixedInput">fixedInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.property.percentInput">percentInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.property.fixed">fixed</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.property.percent">percent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSize">ComputeRegionInstanceGroupManagerVersionTargetSize</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fixedInput`<sup>Optional</sup> <a name="fixedInput" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.property.fixedInput"></a>

```typescript
public readonly fixedInput: number;
```

- *Type:* number

---

##### `percentInput`<sup>Optional</sup> <a name="percentInput" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.property.percentInput"></a>

```typescript
public readonly percentInput: number;
```

- *Type:* number

---

##### `fixed`<sup>Required</sup> <a name="fixed" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.property.fixed"></a>

```typescript
public readonly fixed: number;
```

- *Type:* number

---

##### `percent`<sup>Required</sup> <a name="percent" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.property.percent"></a>

```typescript
public readonly percent: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeRegionInstanceGroupManagerVersionTargetSize;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSize">ComputeRegionInstanceGroupManagerVersionTargetSize</a>

---



