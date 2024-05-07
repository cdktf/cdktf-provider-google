# `computeRegionNetworkEndpointGroup` Submodule <a name="`computeRegionNetworkEndpointGroup` Submodule" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRegionNetworkEndpointGroup <a name="ComputeRegionNetworkEndpointGroup" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_network_endpoint_group google_compute_region_network_endpoint_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer"></a>

```typescript
import { computeRegionNetworkEndpointGroup } from '@cdktf/provider-google'

new computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup(scope: Construct, id: string, config: ComputeRegionNetworkEndpointGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig">ComputeRegionNetworkEndpointGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig">ComputeRegionNetworkEndpointGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.putAppEngine">putAppEngine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.putCloudFunction">putCloudFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.putCloudRun">putCloudRun</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.resetAppEngine">resetAppEngine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.resetCloudFunction">resetCloudFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.resetCloudRun">resetCloudRun</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.resetNetworkEndpointType">resetNetworkEndpointType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.resetPscTargetService">resetPscTargetService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.resetSubnetwork">resetSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAppEngine` <a name="putAppEngine" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.putAppEngine"></a>

```typescript
public putAppEngine(value: ComputeRegionNetworkEndpointGroupAppEngine): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.putAppEngine.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngine">ComputeRegionNetworkEndpointGroupAppEngine</a>

---

##### `putCloudFunction` <a name="putCloudFunction" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.putCloudFunction"></a>

```typescript
public putCloudFunction(value: ComputeRegionNetworkEndpointGroupCloudFunction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.putCloudFunction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunction">ComputeRegionNetworkEndpointGroupCloudFunction</a>

---

##### `putCloudRun` <a name="putCloudRun" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.putCloudRun"></a>

```typescript
public putCloudRun(value: ComputeRegionNetworkEndpointGroupCloudRun): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.putCloudRun.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRun">ComputeRegionNetworkEndpointGroupCloudRun</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.putTimeouts"></a>

```typescript
public putTimeouts(value: ComputeRegionNetworkEndpointGroupTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeouts">ComputeRegionNetworkEndpointGroupTimeouts</a>

---

##### `resetAppEngine` <a name="resetAppEngine" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.resetAppEngine"></a>

```typescript
public resetAppEngine(): void
```

##### `resetCloudFunction` <a name="resetCloudFunction" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.resetCloudFunction"></a>

```typescript
public resetCloudFunction(): void
```

##### `resetCloudRun` <a name="resetCloudRun" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.resetCloudRun"></a>

```typescript
public resetCloudRun(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.resetNetwork"></a>

```typescript
public resetNetwork(): void
```

##### `resetNetworkEndpointType` <a name="resetNetworkEndpointType" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.resetNetworkEndpointType"></a>

```typescript
public resetNetworkEndpointType(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetPscTargetService` <a name="resetPscTargetService" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.resetPscTargetService"></a>

```typescript
public resetPscTargetService(): void
```

##### `resetSubnetwork` <a name="resetSubnetwork" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.resetSubnetwork"></a>

```typescript
public resetSubnetwork(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeRegionNetworkEndpointGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.isConstruct"></a>

```typescript
import { computeRegionNetworkEndpointGroup } from '@cdktf/provider-google'

computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.isTerraformElement"></a>

```typescript
import { computeRegionNetworkEndpointGroup } from '@cdktf/provider-google'

computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.isTerraformResource"></a>

```typescript
import { computeRegionNetworkEndpointGroup } from '@cdktf/provider-google'

computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.generateConfigForImport"></a>

```typescript
import { computeRegionNetworkEndpointGroup } from '@cdktf/provider-google'

computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ComputeRegionNetworkEndpointGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeRegionNetworkEndpointGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeRegionNetworkEndpointGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_network_endpoint_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeRegionNetworkEndpointGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.appEngine">appEngine</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference">ComputeRegionNetworkEndpointGroupAppEngineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.cloudFunction">cloudFunction</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference">ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.cloudRun">cloudRun</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference">ComputeRegionNetworkEndpointGroupCloudRunOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference">ComputeRegionNetworkEndpointGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.appEngineInput">appEngineInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngine">ComputeRegionNetworkEndpointGroupAppEngine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.cloudFunctionInput">cloudFunctionInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunction">ComputeRegionNetworkEndpointGroupCloudFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.cloudRunInput">cloudRunInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRun">ComputeRegionNetworkEndpointGroupCloudRun</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.networkEndpointTypeInput">networkEndpointTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.pscTargetServiceInput">pscTargetServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.subnetworkInput">subnetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeouts">ComputeRegionNetworkEndpointGroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.networkEndpointType">networkEndpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.pscTargetService">pscTargetService</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.subnetwork">subnetwork</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `appEngine`<sup>Required</sup> <a name="appEngine" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.appEngine"></a>

```typescript
public readonly appEngine: ComputeRegionNetworkEndpointGroupAppEngineOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference">ComputeRegionNetworkEndpointGroupAppEngineOutputReference</a>

---

##### `cloudFunction`<sup>Required</sup> <a name="cloudFunction" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.cloudFunction"></a>

```typescript
public readonly cloudFunction: ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference">ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference</a>

---

##### `cloudRun`<sup>Required</sup> <a name="cloudRun" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.cloudRun"></a>

```typescript
public readonly cloudRun: ComputeRegionNetworkEndpointGroupCloudRunOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference">ComputeRegionNetworkEndpointGroupCloudRunOutputReference</a>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeRegionNetworkEndpointGroupTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference">ComputeRegionNetworkEndpointGroupTimeoutsOutputReference</a>

---

##### `appEngineInput`<sup>Optional</sup> <a name="appEngineInput" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.appEngineInput"></a>

```typescript
public readonly appEngineInput: ComputeRegionNetworkEndpointGroupAppEngine;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngine">ComputeRegionNetworkEndpointGroupAppEngine</a>

---

##### `cloudFunctionInput`<sup>Optional</sup> <a name="cloudFunctionInput" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.cloudFunctionInput"></a>

```typescript
public readonly cloudFunctionInput: ComputeRegionNetworkEndpointGroupCloudFunction;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunction">ComputeRegionNetworkEndpointGroupCloudFunction</a>

---

##### `cloudRunInput`<sup>Optional</sup> <a name="cloudRunInput" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.cloudRunInput"></a>

```typescript
public readonly cloudRunInput: ComputeRegionNetworkEndpointGroupCloudRun;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRun">ComputeRegionNetworkEndpointGroupCloudRun</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkEndpointTypeInput`<sup>Optional</sup> <a name="networkEndpointTypeInput" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.networkEndpointTypeInput"></a>

```typescript
public readonly networkEndpointTypeInput: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `pscTargetServiceInput`<sup>Optional</sup> <a name="pscTargetServiceInput" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.pscTargetServiceInput"></a>

```typescript
public readonly pscTargetServiceInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `subnetworkInput`<sup>Optional</sup> <a name="subnetworkInput" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.subnetworkInput"></a>

```typescript
public readonly subnetworkInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ComputeRegionNetworkEndpointGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeouts">ComputeRegionNetworkEndpointGroupTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `networkEndpointType`<sup>Required</sup> <a name="networkEndpointType" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.networkEndpointType"></a>

```typescript
public readonly networkEndpointType: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `pscTargetService`<sup>Required</sup> <a name="pscTargetService" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.pscTargetService"></a>

```typescript
public readonly pscTargetService: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.subnetwork"></a>

```typescript
public readonly subnetwork: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRegionNetworkEndpointGroupAppEngine <a name="ComputeRegionNetworkEndpointGroupAppEngine" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngine"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngine.Initializer"></a>

```typescript
import { computeRegionNetworkEndpointGroup } from '@cdktf/provider-google'

const computeRegionNetworkEndpointGroupAppEngine: computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngine = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngine.property.service">service</a></code> | <code>string</code> | Optional serving service. The service name must be 1-63 characters long, and comply with RFC1035. Example value: "default", "my-service". |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngine.property.urlMask">urlMask</a></code> | <code>string</code> | A template to parse service and version fields from a request URL. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngine.property.version">version</a></code> | <code>string</code> | Optional serving version. The version must be 1-63 characters long, and comply with RFC1035. Example value: "v1", "v2". |

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngine.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

Optional serving service. The service name must be 1-63 characters long, and comply with RFC1035. Example value: "default", "my-service".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_network_endpoint_group#service ComputeRegionNetworkEndpointGroup#service}

---

##### `urlMask`<sup>Optional</sup> <a name="urlMask" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngine.property.urlMask"></a>

```typescript
public readonly urlMask: string;
```

- *Type:* string

A template to parse service and version fields from a request URL.

URL mask allows for routing to multiple App Engine services without
having to create multiple Network Endpoint Groups and backend services.

For example, the request URLs "foo1-dot-appname.appspot.com/v1" and
"foo1-dot-appname.appspot.com/v2" can be backed by the same Serverless NEG with
URL mask "-dot-appname.appspot.com/". The URL mask will parse
them to { service = "foo1", version = "v1" } and { service = "foo1", version = "v2" } respectively.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_network_endpoint_group#url_mask ComputeRegionNetworkEndpointGroup#url_mask}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngine.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Optional serving version. The version must be 1-63 characters long, and comply with RFC1035. Example value: "v1", "v2".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_network_endpoint_group#version ComputeRegionNetworkEndpointGroup#version}

---

### ComputeRegionNetworkEndpointGroupCloudFunction <a name="ComputeRegionNetworkEndpointGroupCloudFunction" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunction.Initializer"></a>

```typescript
import { computeRegionNetworkEndpointGroup } from '@cdktf/provider-google'

const computeRegionNetworkEndpointGroupCloudFunction: computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunction.property.function">function</a></code> | <code>string</code> | A user-defined name of the Cloud Function. The function name is case-sensitive and must be 1-63 characters long. Example value: "func1". |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunction.property.urlMask">urlMask</a></code> | <code>string</code> | A template to parse function field from a request URL. |

---

##### `function`<sup>Optional</sup> <a name="function" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunction.property.function"></a>

```typescript
public readonly function: string;
```

- *Type:* string

A user-defined name of the Cloud Function. The function name is case-sensitive and must be 1-63 characters long. Example value: "func1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_network_endpoint_group#function ComputeRegionNetworkEndpointGroup#function}

---

##### `urlMask`<sup>Optional</sup> <a name="urlMask" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunction.property.urlMask"></a>

```typescript
public readonly urlMask: string;
```

- *Type:* string

A template to parse function field from a request URL.

URL mask allows
for routing to multiple Cloud Functions without having to create
multiple Network Endpoint Groups and backend services.

For example, request URLs "mydomain.com/function1" and "mydomain.com/function2"
can be backed by the same Serverless NEG with URL mask "/". The URL mask
will parse them to { function = "function1" } and { function = "function2" } respectively.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_network_endpoint_group#url_mask ComputeRegionNetworkEndpointGroup#url_mask}

---

### ComputeRegionNetworkEndpointGroupCloudRun <a name="ComputeRegionNetworkEndpointGroupCloudRun" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRun"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRun.Initializer"></a>

```typescript
import { computeRegionNetworkEndpointGroup } from '@cdktf/provider-google'

const computeRegionNetworkEndpointGroupCloudRun: computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRun = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRun.property.service">service</a></code> | <code>string</code> | Cloud Run service is the main resource of Cloud Run. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRun.property.tag">tag</a></code> | <code>string</code> | Cloud Run tag represents the "named-revision" to provide additional fine-grained traffic routing information. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRun.property.urlMask">urlMask</a></code> | <code>string</code> | A template to parse service and tag fields from a request URL. |

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRun.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

Cloud Run service is the main resource of Cloud Run.

The service must be 1-63 characters long, and comply with RFC1035.
Example value: "run-service".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_network_endpoint_group#service ComputeRegionNetworkEndpointGroup#service}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRun.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

Cloud Run tag represents the "named-revision" to provide additional fine-grained traffic routing information.

The tag must be 1-63 characters long, and comply with RFC1035.
Example value: "revision-0010".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_network_endpoint_group#tag ComputeRegionNetworkEndpointGroup#tag}

---

##### `urlMask`<sup>Optional</sup> <a name="urlMask" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRun.property.urlMask"></a>

```typescript
public readonly urlMask: string;
```

- *Type:* string

A template to parse service and tag fields from a request URL.

URL mask allows for routing to multiple Run services without having
to create multiple network endpoint groups and backend services.

For example, request URLs "foo1.domain.com/bar1" and "foo1.domain.com/bar2"
an be backed by the same Serverless Network Endpoint Group (NEG) with
URL mask ".domain.com/". The URL mask will parse them to { service="bar1", tag="foo1" }
and { service="bar2", tag="foo2" } respectively.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_network_endpoint_group#url_mask ComputeRegionNetworkEndpointGroup#url_mask}

---

### ComputeRegionNetworkEndpointGroupConfig <a name="ComputeRegionNetworkEndpointGroupConfig" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.Initializer"></a>

```typescript
import { computeRegionNetworkEndpointGroup } from '@cdktf/provider-google'

const computeRegionNetworkEndpointGroupConfig: computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.name">name</a></code> | <code>string</code> | Name of the resource; |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.region">region</a></code> | <code>string</code> | A reference to the region where the regional NEGs reside. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.appEngine">appEngine</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngine">ComputeRegionNetworkEndpointGroupAppEngine</a></code> | app_engine block. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.cloudFunction">cloudFunction</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunction">ComputeRegionNetworkEndpointGroupCloudFunction</a></code> | cloud_function block. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.cloudRun">cloudRun</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRun">ComputeRegionNetworkEndpointGroupCloudRun</a></code> | cloud_run block. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.description">description</a></code> | <code>string</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_network_endpoint_group#id ComputeRegionNetworkEndpointGroup#id}. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.network">network</a></code> | <code>string</code> | This field is only used for PSC and INTERNET NEGs. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.networkEndpointType">networkEndpointType</a></code> | <code>string</code> | Type of network endpoints in this network endpoint group. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_network_endpoint_group#project ComputeRegionNetworkEndpointGroup#project}. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.pscTargetService">pscTargetService</a></code> | <code>string</code> | This field is only used for PSC and INTERNET NEGs. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.subnetwork">subnetwork</a></code> | <code>string</code> | This field is only used for PSC NEGs. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeouts">ComputeRegionNetworkEndpointGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the resource;

provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_network_endpoint_group#name ComputeRegionNetworkEndpointGroup#name}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

A reference to the region where the regional NEGs reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_network_endpoint_group#region ComputeRegionNetworkEndpointGroup#region}

---

##### `appEngine`<sup>Optional</sup> <a name="appEngine" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.appEngine"></a>

```typescript
public readonly appEngine: ComputeRegionNetworkEndpointGroupAppEngine;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngine">ComputeRegionNetworkEndpointGroupAppEngine</a>

app_engine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_network_endpoint_group#app_engine ComputeRegionNetworkEndpointGroup#app_engine}

---

##### `cloudFunction`<sup>Optional</sup> <a name="cloudFunction" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.cloudFunction"></a>

```typescript
public readonly cloudFunction: ComputeRegionNetworkEndpointGroupCloudFunction;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunction">ComputeRegionNetworkEndpointGroupCloudFunction</a>

cloud_function block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_network_endpoint_group#cloud_function ComputeRegionNetworkEndpointGroup#cloud_function}

---

##### `cloudRun`<sup>Optional</sup> <a name="cloudRun" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.cloudRun"></a>

```typescript
public readonly cloudRun: ComputeRegionNetworkEndpointGroupCloudRun;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRun">ComputeRegionNetworkEndpointGroupCloudRun</a>

cloud_run block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_network_endpoint_group#cloud_run ComputeRegionNetworkEndpointGroup#cloud_run}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_network_endpoint_group#description ComputeRegionNetworkEndpointGroup#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_network_endpoint_group#id ComputeRegionNetworkEndpointGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

This field is only used for PSC and INTERNET NEGs.

The URL of the network to which all network endpoints in the NEG belong. Uses
"default" project network if unspecified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_network_endpoint_group#network ComputeRegionNetworkEndpointGroup#network}

---

##### `networkEndpointType`<sup>Optional</sup> <a name="networkEndpointType" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.networkEndpointType"></a>

```typescript
public readonly networkEndpointType: string;
```

- *Type:* string

Type of network endpoints in this network endpoint group.

Defaults to SERVERLESS. Default value: "SERVERLESS" Possible values: ["SERVERLESS", "PRIVATE_SERVICE_CONNECT", "INTERNET_IP_PORT", "INTERNET_FQDN_PORT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_network_endpoint_group#network_endpoint_type ComputeRegionNetworkEndpointGroup#network_endpoint_type}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_network_endpoint_group#project ComputeRegionNetworkEndpointGroup#project}.

---

##### `pscTargetService`<sup>Optional</sup> <a name="pscTargetService" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.pscTargetService"></a>

```typescript
public readonly pscTargetService: string;
```

- *Type:* string

This field is only used for PSC and INTERNET NEGs.

The target service url used to set up private service connection to
a Google API or a PSC Producer Service Attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_network_endpoint_group#psc_target_service ComputeRegionNetworkEndpointGroup#psc_target_service}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.subnetwork"></a>

```typescript
public readonly subnetwork: string;
```

- *Type:* string

This field is only used for PSC NEGs.

Optional URL of the subnetwork to which all network endpoints in the NEG belong.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_network_endpoint_group#subnetwork ComputeRegionNetworkEndpointGroup#subnetwork}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeRegionNetworkEndpointGroupTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeouts">ComputeRegionNetworkEndpointGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_network_endpoint_group#timeouts ComputeRegionNetworkEndpointGroup#timeouts}

---

### ComputeRegionNetworkEndpointGroupTimeouts <a name="ComputeRegionNetworkEndpointGroupTimeouts" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeouts.Initializer"></a>

```typescript
import { computeRegionNetworkEndpointGroup } from '@cdktf/provider-google'

const computeRegionNetworkEndpointGroupTimeouts: computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_network_endpoint_group#create ComputeRegionNetworkEndpointGroup#create}. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_network_endpoint_group#delete ComputeRegionNetworkEndpointGroup#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_network_endpoint_group#create ComputeRegionNetworkEndpointGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/compute_region_network_endpoint_group#delete ComputeRegionNetworkEndpointGroup#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRegionNetworkEndpointGroupAppEngineOutputReference <a name="ComputeRegionNetworkEndpointGroupAppEngineOutputReference" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.Initializer"></a>

```typescript
import { computeRegionNetworkEndpointGroup } from '@cdktf/provider-google'

new computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.resetService">resetService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.resetUrlMask">resetUrlMask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetService` <a name="resetService" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.resetService"></a>

```typescript
public resetService(): void
```

##### `resetUrlMask` <a name="resetUrlMask" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.resetUrlMask"></a>

```typescript
public resetUrlMask(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.urlMaskInput">urlMaskInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.urlMask">urlMask</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngine">ComputeRegionNetworkEndpointGroupAppEngine</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `urlMaskInput`<sup>Optional</sup> <a name="urlMaskInput" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.urlMaskInput"></a>

```typescript
public readonly urlMaskInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `urlMask`<sup>Required</sup> <a name="urlMask" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.urlMask"></a>

```typescript
public readonly urlMask: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngineOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeRegionNetworkEndpointGroupAppEngine;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupAppEngine">ComputeRegionNetworkEndpointGroupAppEngine</a>

---


### ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference <a name="ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.Initializer"></a>

```typescript
import { computeRegionNetworkEndpointGroup } from '@cdktf/provider-google'

new computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.resetFunction">resetFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.resetUrlMask">resetUrlMask</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFunction` <a name="resetFunction" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.resetFunction"></a>

```typescript
public resetFunction(): void
```

##### `resetUrlMask` <a name="resetUrlMask" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.resetUrlMask"></a>

```typescript
public resetUrlMask(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.functionInput">functionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.urlMaskInput">urlMaskInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.function">function</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.urlMask">urlMask</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunction">ComputeRegionNetworkEndpointGroupCloudFunction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `functionInput`<sup>Optional</sup> <a name="functionInput" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.functionInput"></a>

```typescript
public readonly functionInput: string;
```

- *Type:* string

---

##### `urlMaskInput`<sup>Optional</sup> <a name="urlMaskInput" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.urlMaskInput"></a>

```typescript
public readonly urlMaskInput: string;
```

- *Type:* string

---

##### `function`<sup>Required</sup> <a name="function" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.function"></a>

```typescript
public readonly function: string;
```

- *Type:* string

---

##### `urlMask`<sup>Required</sup> <a name="urlMask" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.urlMask"></a>

```typescript
public readonly urlMask: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunctionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeRegionNetworkEndpointGroupCloudFunction;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudFunction">ComputeRegionNetworkEndpointGroupCloudFunction</a>

---


### ComputeRegionNetworkEndpointGroupCloudRunOutputReference <a name="ComputeRegionNetworkEndpointGroupCloudRunOutputReference" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.Initializer"></a>

```typescript
import { computeRegionNetworkEndpointGroup } from '@cdktf/provider-google'

new computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.resetService">resetService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.resetTag">resetTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.resetUrlMask">resetUrlMask</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetService` <a name="resetService" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.resetService"></a>

```typescript
public resetService(): void
```

##### `resetTag` <a name="resetTag" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.resetTag"></a>

```typescript
public resetTag(): void
```

##### `resetUrlMask` <a name="resetUrlMask" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.resetUrlMask"></a>

```typescript
public resetUrlMask(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.tagInput">tagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.urlMaskInput">urlMaskInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.tag">tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.urlMask">urlMask</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRun">ComputeRegionNetworkEndpointGroupCloudRun</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `tagInput`<sup>Optional</sup> <a name="tagInput" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.tagInput"></a>

```typescript
public readonly tagInput: string;
```

- *Type:* string

---

##### `urlMaskInput`<sup>Optional</sup> <a name="urlMaskInput" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.urlMaskInput"></a>

```typescript
public readonly urlMaskInput: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

---

##### `urlMask`<sup>Required</sup> <a name="urlMask" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.urlMask"></a>

```typescript
public readonly urlMask: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRunOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeRegionNetworkEndpointGroupCloudRun;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupCloudRun">ComputeRegionNetworkEndpointGroupCloudRun</a>

---


### ComputeRegionNetworkEndpointGroupTimeoutsOutputReference <a name="ComputeRegionNetworkEndpointGroupTimeoutsOutputReference" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.Initializer"></a>

```typescript
import { computeRegionNetworkEndpointGroup } from '@cdktf/provider-google'

new computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeouts">ComputeRegionNetworkEndpointGroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeRegionNetworkEndpointGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRegionNetworkEndpointGroup.ComputeRegionNetworkEndpointGroupTimeouts">ComputeRegionNetworkEndpointGroupTimeouts</a>

---



