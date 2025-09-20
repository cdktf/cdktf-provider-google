# `discoveryEngineRecommendationEngine` Submodule <a name="`discoveryEngineRecommendationEngine` Submodule" id="@cdktf/provider-google.discoveryEngineRecommendationEngine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DiscoveryEngineRecommendationEngine <a name="DiscoveryEngineRecommendationEngine" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/discovery_engine_recommendation_engine google_discovery_engine_recommendation_engine}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.Initializer"></a>

```typescript
import { discoveryEngineRecommendationEngine } from '@cdktf/provider-google'

new discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine(scope: Construct, id: string, config: DiscoveryEngineRecommendationEngineConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig">DiscoveryEngineRecommendationEngineConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig">DiscoveryEngineRecommendationEngineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.putCommonConfig">putCommonConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.putMediaRecommendationEngineConfig">putMediaRecommendationEngineConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.resetCommonConfig">resetCommonConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.resetIndustryVertical">resetIndustryVertical</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.resetMediaRecommendationEngineConfig">resetMediaRecommendationEngineConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCommonConfig` <a name="putCommonConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.putCommonConfig"></a>

```typescript
public putCommonConfig(value: DiscoveryEngineRecommendationEngineCommonConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.putCommonConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfig">DiscoveryEngineRecommendationEngineCommonConfig</a>

---

##### `putMediaRecommendationEngineConfig` <a name="putMediaRecommendationEngineConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.putMediaRecommendationEngineConfig"></a>

```typescript
public putMediaRecommendationEngineConfig(value: DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.putMediaRecommendationEngineConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.putTimeouts"></a>

```typescript
public putTimeouts(value: DiscoveryEngineRecommendationEngineTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeouts">DiscoveryEngineRecommendationEngineTimeouts</a>

---

##### `resetCommonConfig` <a name="resetCommonConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.resetCommonConfig"></a>

```typescript
public resetCommonConfig(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIndustryVertical` <a name="resetIndustryVertical" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.resetIndustryVertical"></a>

```typescript
public resetIndustryVertical(): void
```

##### `resetMediaRecommendationEngineConfig` <a name="resetMediaRecommendationEngineConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.resetMediaRecommendationEngineConfig"></a>

```typescript
public resetMediaRecommendationEngineConfig(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DiscoveryEngineRecommendationEngine resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.isConstruct"></a>

```typescript
import { discoveryEngineRecommendationEngine } from '@cdktf/provider-google'

discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.isTerraformElement"></a>

```typescript
import { discoveryEngineRecommendationEngine } from '@cdktf/provider-google'

discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.isTerraformResource"></a>

```typescript
import { discoveryEngineRecommendationEngine } from '@cdktf/provider-google'

discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.generateConfigForImport"></a>

```typescript
import { discoveryEngineRecommendationEngine } from '@cdktf/provider-google'

discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DiscoveryEngineRecommendationEngine resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DiscoveryEngineRecommendationEngine to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DiscoveryEngineRecommendationEngine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/discovery_engine_recommendation_engine#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DiscoveryEngineRecommendationEngine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.commonConfig">commonConfig</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference">DiscoveryEngineRecommendationEngineCommonConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.mediaRecommendationEngineConfig">mediaRecommendationEngineConfig</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference">DiscoveryEngineRecommendationEngineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.commonConfigInput">commonConfigInput</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfig">DiscoveryEngineRecommendationEngineCommonConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.dataStoreIdsInput">dataStoreIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.engineIdInput">engineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.industryVerticalInput">industryVerticalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.mediaRecommendationEngineConfigInput">mediaRecommendationEngineConfigInput</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeouts">DiscoveryEngineRecommendationEngineTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.dataStoreIds">dataStoreIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.engineId">engineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.industryVertical">industryVertical</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `commonConfig`<sup>Required</sup> <a name="commonConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.commonConfig"></a>

```typescript
public readonly commonConfig: DiscoveryEngineRecommendationEngineCommonConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference">DiscoveryEngineRecommendationEngineCommonConfigOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `mediaRecommendationEngineConfig`<sup>Required</sup> <a name="mediaRecommendationEngineConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.mediaRecommendationEngineConfig"></a>

```typescript
public readonly mediaRecommendationEngineConfig: DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.timeouts"></a>

```typescript
public readonly timeouts: DiscoveryEngineRecommendationEngineTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference">DiscoveryEngineRecommendationEngineTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `commonConfigInput`<sup>Optional</sup> <a name="commonConfigInput" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.commonConfigInput"></a>

```typescript
public readonly commonConfigInput: DiscoveryEngineRecommendationEngineCommonConfig;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfig">DiscoveryEngineRecommendationEngineCommonConfig</a>

---

##### `dataStoreIdsInput`<sup>Optional</sup> <a name="dataStoreIdsInput" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.dataStoreIdsInput"></a>

```typescript
public readonly dataStoreIdsInput: string[];
```

- *Type:* string[]

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `engineIdInput`<sup>Optional</sup> <a name="engineIdInput" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.engineIdInput"></a>

```typescript
public readonly engineIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `industryVerticalInput`<sup>Optional</sup> <a name="industryVerticalInput" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.industryVerticalInput"></a>

```typescript
public readonly industryVerticalInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `mediaRecommendationEngineConfigInput`<sup>Optional</sup> <a name="mediaRecommendationEngineConfigInput" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.mediaRecommendationEngineConfigInput"></a>

```typescript
public readonly mediaRecommendationEngineConfigInput: DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DiscoveryEngineRecommendationEngineTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeouts">DiscoveryEngineRecommendationEngineTimeouts</a>

---

##### `dataStoreIds`<sup>Required</sup> <a name="dataStoreIds" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.dataStoreIds"></a>

```typescript
public readonly dataStoreIds: string[];
```

- *Type:* string[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `engineId`<sup>Required</sup> <a name="engineId" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.engineId"></a>

```typescript
public readonly engineId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `industryVertical`<sup>Required</sup> <a name="industryVertical" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.industryVertical"></a>

```typescript
public readonly industryVertical: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DiscoveryEngineRecommendationEngineCommonConfig <a name="DiscoveryEngineRecommendationEngineCommonConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfig.Initializer"></a>

```typescript
import { discoveryEngineRecommendationEngine } from '@cdktf/provider-google'

const discoveryEngineRecommendationEngineCommonConfig: discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfig.property.companyName">companyName</a></code> | <code>string</code> | The name of the company, business or entity that is associated with the engine. |

---

##### `companyName`<sup>Optional</sup> <a name="companyName" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfig.property.companyName"></a>

```typescript
public readonly companyName: string;
```

- *Type:* string

The name of the company, business or entity that is associated with the engine.

Setting this may help improve LLM related features.cd

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/discovery_engine_recommendation_engine#company_name DiscoveryEngineRecommendationEngine#company_name}

---

### DiscoveryEngineRecommendationEngineConfig <a name="DiscoveryEngineRecommendationEngineConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.Initializer"></a>

```typescript
import { discoveryEngineRecommendationEngine } from '@cdktf/provider-google'

const discoveryEngineRecommendationEngineConfig: discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.dataStoreIds">dataStoreIds</a></code> | <code>string[]</code> | The data stores associated with this engine. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.displayName">displayName</a></code> | <code>string</code> | Required. The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.engineId">engineId</a></code> | <code>string</code> | Unique ID to use for Recommendation Engine. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.location">location</a></code> | <code>string</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.commonConfig">commonConfig</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfig">DiscoveryEngineRecommendationEngineCommonConfig</a></code> | common_config block. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/discovery_engine_recommendation_engine#id DiscoveryEngineRecommendationEngine#id}. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.industryVertical">industryVertical</a></code> | <code>string</code> | The industry vertical that the engine registers. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.mediaRecommendationEngineConfig">mediaRecommendationEngineConfig</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig</a></code> | media_recommendation_engine_config block. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/discovery_engine_recommendation_engine#project DiscoveryEngineRecommendationEngine#project}. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeouts">DiscoveryEngineRecommendationEngineTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dataStoreIds`<sup>Required</sup> <a name="dataStoreIds" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.dataStoreIds"></a>

```typescript
public readonly dataStoreIds: string[];
```

- *Type:* string[]

The data stores associated with this engine.

For SOLUTION_TYPE_RECOMMENDATION type of engines, they can only associate with at most one data store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/discovery_engine_recommendation_engine#data_store_ids DiscoveryEngineRecommendationEngine#data_store_ids}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Required. The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/discovery_engine_recommendation_engine#display_name DiscoveryEngineRecommendationEngine#display_name}

---

##### `engineId`<sup>Required</sup> <a name="engineId" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.engineId"></a>

```typescript
public readonly engineId: string;
```

- *Type:* string

Unique ID to use for Recommendation Engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/discovery_engine_recommendation_engine#engine_id DiscoveryEngineRecommendationEngine#engine_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/discovery_engine_recommendation_engine#location DiscoveryEngineRecommendationEngine#location}

---

##### `commonConfig`<sup>Optional</sup> <a name="commonConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.commonConfig"></a>

```typescript
public readonly commonConfig: DiscoveryEngineRecommendationEngineCommonConfig;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfig">DiscoveryEngineRecommendationEngineCommonConfig</a>

common_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/discovery_engine_recommendation_engine#common_config DiscoveryEngineRecommendationEngine#common_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/discovery_engine_recommendation_engine#id DiscoveryEngineRecommendationEngine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `industryVertical`<sup>Optional</sup> <a name="industryVertical" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.industryVertical"></a>

```typescript
public readonly industryVertical: string;
```

- *Type:* string

The industry vertical that the engine registers.

The restriction of the Engine industry vertical is based on DataStore: If unspecified, default to GENERIC. Vertical on Engine has to match vertical of the DataStore liniked to the engine. Default value: "GENERIC" Possible values: ["GENERIC", "MEDIA"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/discovery_engine_recommendation_engine#industry_vertical DiscoveryEngineRecommendationEngine#industry_vertical}

---

##### `mediaRecommendationEngineConfig`<sup>Optional</sup> <a name="mediaRecommendationEngineConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.mediaRecommendationEngineConfig"></a>

```typescript
public readonly mediaRecommendationEngineConfig: DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig</a>

media_recommendation_engine_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/discovery_engine_recommendation_engine#media_recommendation_engine_config DiscoveryEngineRecommendationEngine#media_recommendation_engine_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/discovery_engine_recommendation_engine#project DiscoveryEngineRecommendationEngine#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DiscoveryEngineRecommendationEngineTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeouts">DiscoveryEngineRecommendationEngineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/discovery_engine_recommendation_engine#timeouts DiscoveryEngineRecommendationEngine#timeouts}

---

### DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig <a name="DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig.Initializer"></a>

```typescript
import { discoveryEngineRecommendationEngine } from '@cdktf/provider-google'

const discoveryEngineRecommendationEngineMediaRecommendationEngineConfig: discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig.property.engineFeaturesConfig">engineFeaturesConfig</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig</a></code> | engine_features_config block. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig.property.optimizationObjective">optimizationObjective</a></code> | <code>string</code> | The optimization objective. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig.property.optimizationObjectiveConfig">optimizationObjectiveConfig</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig</a></code> | optimization_objective_config block. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig.property.trainingState">trainingState</a></code> | <code>string</code> | The training state that the engine is in (e.g. 'TRAINING' or 'PAUSED'). Since part of the cost of running the service is frequency of training - this can be used to determine when to train engine in order to control cost. If not specified: the default value for 'CreateEngine' method is 'TRAINING'. The default value for 'UpdateEngine' method is to keep the state the same as before. Possible values: ["PAUSED", "TRAINING"]. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig.property.type">type</a></code> | <code>string</code> | The type of engine. |

---

##### `engineFeaturesConfig`<sup>Optional</sup> <a name="engineFeaturesConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig.property.engineFeaturesConfig"></a>

```typescript
public readonly engineFeaturesConfig: DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig</a>

engine_features_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/discovery_engine_recommendation_engine#engine_features_config DiscoveryEngineRecommendationEngine#engine_features_config}

---

##### `optimizationObjective`<sup>Optional</sup> <a name="optimizationObjective" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig.property.optimizationObjective"></a>

```typescript
public readonly optimizationObjective: string;
```

- *Type:* string

The optimization objective.

e.g., 'cvr'.
This field together with MediaRecommendationEngineConfig.type describes
engine metadata to use to control engine training and serving.
Currently supported values: 'ctr', 'cvr'.
If not specified, we choose default based on engine type. Default depends on type of recommendation:
'recommended-for-you' => 'ctr'
'others-you-may-like' => 'ctr'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/discovery_engine_recommendation_engine#optimization_objective DiscoveryEngineRecommendationEngine#optimization_objective}

---

##### `optimizationObjectiveConfig`<sup>Optional</sup> <a name="optimizationObjectiveConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig.property.optimizationObjectiveConfig"></a>

```typescript
public readonly optimizationObjectiveConfig: DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig</a>

optimization_objective_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/discovery_engine_recommendation_engine#optimization_objective_config DiscoveryEngineRecommendationEngine#optimization_objective_config}

---

##### `trainingState`<sup>Optional</sup> <a name="trainingState" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig.property.trainingState"></a>

```typescript
public readonly trainingState: string;
```

- *Type:* string

The training state that the engine is in (e.g. 'TRAINING' or 'PAUSED'). Since part of the cost of running the service is frequency of training - this can be used to determine when to train engine in order to control cost. If not specified: the default value for 'CreateEngine' method is 'TRAINING'. The default value for 'UpdateEngine' method is to keep the state the same as before. Possible values: ["PAUSED", "TRAINING"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/discovery_engine_recommendation_engine#training_state DiscoveryEngineRecommendationEngine#training_state}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of engine.

e.g., 'recommended-for-you'.
This field together with MediaRecommendationEngineConfig.optimizationObjective describes
engine metadata to use to control engine training and serving.
Currently supported values: 'recommended-for-you', 'others-you-may-like',
'more-like-this', 'most-popular-items'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/discovery_engine_recommendation_engine#type DiscoveryEngineRecommendationEngine#type}

---

### DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig <a name="DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig.Initializer"></a>

```typescript
import { discoveryEngineRecommendationEngine } from '@cdktf/provider-google'

const discoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig: discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig.property.mostPopularConfig">mostPopularConfig</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig</a></code> | most_popular_config block. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig.property.recommendedForYouConfig">recommendedForYouConfig</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig</a></code> | recommended_for_you_config block. |

---

##### `mostPopularConfig`<sup>Optional</sup> <a name="mostPopularConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig.property.mostPopularConfig"></a>

```typescript
public readonly mostPopularConfig: DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig</a>

most_popular_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/discovery_engine_recommendation_engine#most_popular_config DiscoveryEngineRecommendationEngine#most_popular_config}

---

##### `recommendedForYouConfig`<sup>Optional</sup> <a name="recommendedForYouConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig.property.recommendedForYouConfig"></a>

```typescript
public readonly recommendedForYouConfig: DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig</a>

recommended_for_you_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/discovery_engine_recommendation_engine#recommended_for_you_config DiscoveryEngineRecommendationEngine#recommended_for_you_config}

---

### DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig <a name="DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig.Initializer"></a>

```typescript
import { discoveryEngineRecommendationEngine } from '@cdktf/provider-google'

const discoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig: discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig.property.timeWindowDays">timeWindowDays</a></code> | <code>number</code> | The time window of which the engine is queried at training and prediction time. |

---

##### `timeWindowDays`<sup>Optional</sup> <a name="timeWindowDays" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig.property.timeWindowDays"></a>

```typescript
public readonly timeWindowDays: number;
```

- *Type:* number

The time window of which the engine is queried at training and prediction time.

Positive integers only. The value translates to the
last X days of events. Currently required for the 'most-popular-items'
engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/discovery_engine_recommendation_engine#time_window_days DiscoveryEngineRecommendationEngine#time_window_days}

---

### DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig <a name="DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig.Initializer"></a>

```typescript
import { discoveryEngineRecommendationEngine } from '@cdktf/provider-google'

const discoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig: discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig.property.contextEventType">contextEventType</a></code> | <code>string</code> | The type of event with which the engine is queried at prediction time. |

---

##### `contextEventType`<sup>Optional</sup> <a name="contextEventType" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig.property.contextEventType"></a>

```typescript
public readonly contextEventType: string;
```

- *Type:* string

The type of event with which the engine is queried at prediction time.

If set to 'generic', only 'view-item', 'media-play',and
'media-complete' will be used as 'context-event' in engine training. If
set to 'view-home-page', 'view-home-page' will also be used as
'context-events' in addition to 'view-item', 'media-play', and
'media-complete'. Currently supported for the 'recommended-for-you'
engine. Currently supported values: 'view-home-page', 'generic'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/discovery_engine_recommendation_engine#context_event_type DiscoveryEngineRecommendationEngine#context_event_type}

---

### DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig <a name="DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig.Initializer"></a>

```typescript
import { discoveryEngineRecommendationEngine } from '@cdktf/provider-google'

const discoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig: discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig.property.targetField">targetField</a></code> | <code>string</code> | The name of the field to target. Currently supported values: 'watch-percentage', 'watch-time'. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig.property.targetFieldValueFloat">targetFieldValueFloat</a></code> | <code>number</code> | The threshold to be applied to the target (e.g., 0.5). |

---

##### `targetField`<sup>Optional</sup> <a name="targetField" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig.property.targetField"></a>

```typescript
public readonly targetField: string;
```

- *Type:* string

The name of the field to target. Currently supported values: 'watch-percentage', 'watch-time'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/discovery_engine_recommendation_engine#target_field DiscoveryEngineRecommendationEngine#target_field}

---

##### `targetFieldValueFloat`<sup>Optional</sup> <a name="targetFieldValueFloat" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig.property.targetFieldValueFloat"></a>

```typescript
public readonly targetFieldValueFloat: number;
```

- *Type:* number

The threshold to be applied to the target (e.g., 0.5).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/discovery_engine_recommendation_engine#target_field_value_float DiscoveryEngineRecommendationEngine#target_field_value_float}

---

### DiscoveryEngineRecommendationEngineTimeouts <a name="DiscoveryEngineRecommendationEngineTimeouts" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeouts.Initializer"></a>

```typescript
import { discoveryEngineRecommendationEngine } from '@cdktf/provider-google'

const discoveryEngineRecommendationEngineTimeouts: discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/discovery_engine_recommendation_engine#create DiscoveryEngineRecommendationEngine#create}. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/discovery_engine_recommendation_engine#delete DiscoveryEngineRecommendationEngine#delete}. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/discovery_engine_recommendation_engine#update DiscoveryEngineRecommendationEngine#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/discovery_engine_recommendation_engine#create DiscoveryEngineRecommendationEngine#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/discovery_engine_recommendation_engine#delete DiscoveryEngineRecommendationEngine#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/discovery_engine_recommendation_engine#update DiscoveryEngineRecommendationEngine#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DiscoveryEngineRecommendationEngineCommonConfigOutputReference <a name="DiscoveryEngineRecommendationEngineCommonConfigOutputReference" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.Initializer"></a>

```typescript
import { discoveryEngineRecommendationEngine } from '@cdktf/provider-google'

new discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.resetCompanyName">resetCompanyName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCompanyName` <a name="resetCompanyName" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.resetCompanyName"></a>

```typescript
public resetCompanyName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.property.companyNameInput">companyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.property.companyName">companyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfig">DiscoveryEngineRecommendationEngineCommonConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `companyNameInput`<sup>Optional</sup> <a name="companyNameInput" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.property.companyNameInput"></a>

```typescript
public readonly companyNameInput: string;
```

- *Type:* string

---

##### `companyName`<sup>Required</sup> <a name="companyName" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.property.companyName"></a>

```typescript
public readonly companyName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DiscoveryEngineRecommendationEngineCommonConfig;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfig">DiscoveryEngineRecommendationEngineCommonConfig</a>

---


### DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference <a name="DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.Initializer"></a>

```typescript
import { discoveryEngineRecommendationEngine } from '@cdktf/provider-google'

new discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.resetTimeWindowDays">resetTimeWindowDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTimeWindowDays` <a name="resetTimeWindowDays" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.resetTimeWindowDays"></a>

```typescript
public resetTimeWindowDays(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.property.timeWindowDaysInput">timeWindowDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.property.timeWindowDays">timeWindowDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `timeWindowDaysInput`<sup>Optional</sup> <a name="timeWindowDaysInput" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.property.timeWindowDaysInput"></a>

```typescript
public readonly timeWindowDaysInput: number;
```

- *Type:* number

---

##### `timeWindowDays`<sup>Required</sup> <a name="timeWindowDays" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.property.timeWindowDays"></a>

```typescript
public readonly timeWindowDays: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig</a>

---


### DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference <a name="DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.Initializer"></a>

```typescript
import { discoveryEngineRecommendationEngine } from '@cdktf/provider-google'

new discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.putMostPopularConfig">putMostPopularConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.putRecommendedForYouConfig">putRecommendedForYouConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.resetMostPopularConfig">resetMostPopularConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.resetRecommendedForYouConfig">resetRecommendedForYouConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMostPopularConfig` <a name="putMostPopularConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.putMostPopularConfig"></a>

```typescript
public putMostPopularConfig(value: DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.putMostPopularConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig</a>

---

##### `putRecommendedForYouConfig` <a name="putRecommendedForYouConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.putRecommendedForYouConfig"></a>

```typescript
public putRecommendedForYouConfig(value: DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.putRecommendedForYouConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig</a>

---

##### `resetMostPopularConfig` <a name="resetMostPopularConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.resetMostPopularConfig"></a>

```typescript
public resetMostPopularConfig(): void
```

##### `resetRecommendedForYouConfig` <a name="resetRecommendedForYouConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.resetRecommendedForYouConfig"></a>

```typescript
public resetRecommendedForYouConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.property.mostPopularConfig">mostPopularConfig</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.property.recommendedForYouConfig">recommendedForYouConfig</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.property.mostPopularConfigInput">mostPopularConfigInput</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.property.recommendedForYouConfigInput">recommendedForYouConfigInput</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mostPopularConfig`<sup>Required</sup> <a name="mostPopularConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.property.mostPopularConfig"></a>

```typescript
public readonly mostPopularConfig: DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference</a>

---

##### `recommendedForYouConfig`<sup>Required</sup> <a name="recommendedForYouConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.property.recommendedForYouConfig"></a>

```typescript
public readonly recommendedForYouConfig: DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference</a>

---

##### `mostPopularConfigInput`<sup>Optional</sup> <a name="mostPopularConfigInput" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.property.mostPopularConfigInput"></a>

```typescript
public readonly mostPopularConfigInput: DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig</a>

---

##### `recommendedForYouConfigInput`<sup>Optional</sup> <a name="recommendedForYouConfigInput" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.property.recommendedForYouConfigInput"></a>

```typescript
public readonly recommendedForYouConfigInput: DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig</a>

---


### DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference <a name="DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.Initializer"></a>

```typescript
import { discoveryEngineRecommendationEngine } from '@cdktf/provider-google'

new discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.resetContextEventType">resetContextEventType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContextEventType` <a name="resetContextEventType" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.resetContextEventType"></a>

```typescript
public resetContextEventType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.property.contextEventTypeInput">contextEventTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.property.contextEventType">contextEventType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contextEventTypeInput`<sup>Optional</sup> <a name="contextEventTypeInput" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.property.contextEventTypeInput"></a>

```typescript
public readonly contextEventTypeInput: string;
```

- *Type:* string

---

##### `contextEventType`<sup>Required</sup> <a name="contextEventType" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.property.contextEventType"></a>

```typescript
public readonly contextEventType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig</a>

---


### DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference <a name="DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.Initializer"></a>

```typescript
import { discoveryEngineRecommendationEngine } from '@cdktf/provider-google'

new discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.resetTargetField">resetTargetField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.resetTargetFieldValueFloat">resetTargetFieldValueFloat</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTargetField` <a name="resetTargetField" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.resetTargetField"></a>

```typescript
public resetTargetField(): void
```

##### `resetTargetFieldValueFloat` <a name="resetTargetFieldValueFloat" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.resetTargetFieldValueFloat"></a>

```typescript
public resetTargetFieldValueFloat(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.property.targetFieldInput">targetFieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.property.targetFieldValueFloatInput">targetFieldValueFloatInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.property.targetField">targetField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.property.targetFieldValueFloat">targetFieldValueFloat</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `targetFieldInput`<sup>Optional</sup> <a name="targetFieldInput" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.property.targetFieldInput"></a>

```typescript
public readonly targetFieldInput: string;
```

- *Type:* string

---

##### `targetFieldValueFloatInput`<sup>Optional</sup> <a name="targetFieldValueFloatInput" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.property.targetFieldValueFloatInput"></a>

```typescript
public readonly targetFieldValueFloatInput: number;
```

- *Type:* number

---

##### `targetField`<sup>Required</sup> <a name="targetField" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.property.targetField"></a>

```typescript
public readonly targetField: string;
```

- *Type:* string

---

##### `targetFieldValueFloat`<sup>Required</sup> <a name="targetFieldValueFloat" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.property.targetFieldValueFloat"></a>

```typescript
public readonly targetFieldValueFloat: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig</a>

---


### DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference <a name="DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.Initializer"></a>

```typescript
import { discoveryEngineRecommendationEngine } from '@cdktf/provider-google'

new discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.putEngineFeaturesConfig">putEngineFeaturesConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.putOptimizationObjectiveConfig">putOptimizationObjectiveConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.resetEngineFeaturesConfig">resetEngineFeaturesConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.resetOptimizationObjective">resetOptimizationObjective</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.resetOptimizationObjectiveConfig">resetOptimizationObjectiveConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.resetTrainingState">resetTrainingState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEngineFeaturesConfig` <a name="putEngineFeaturesConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.putEngineFeaturesConfig"></a>

```typescript
public putEngineFeaturesConfig(value: DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.putEngineFeaturesConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig</a>

---

##### `putOptimizationObjectiveConfig` <a name="putOptimizationObjectiveConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.putOptimizationObjectiveConfig"></a>

```typescript
public putOptimizationObjectiveConfig(value: DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.putOptimizationObjectiveConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig</a>

---

##### `resetEngineFeaturesConfig` <a name="resetEngineFeaturesConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.resetEngineFeaturesConfig"></a>

```typescript
public resetEngineFeaturesConfig(): void
```

##### `resetOptimizationObjective` <a name="resetOptimizationObjective" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.resetOptimizationObjective"></a>

```typescript
public resetOptimizationObjective(): void
```

##### `resetOptimizationObjectiveConfig` <a name="resetOptimizationObjectiveConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.resetOptimizationObjectiveConfig"></a>

```typescript
public resetOptimizationObjectiveConfig(): void
```

##### `resetTrainingState` <a name="resetTrainingState" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.resetTrainingState"></a>

```typescript
public resetTrainingState(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.engineFeaturesConfig">engineFeaturesConfig</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.optimizationObjectiveConfig">optimizationObjectiveConfig</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.engineFeaturesConfigInput">engineFeaturesConfigInput</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.optimizationObjectiveConfigInput">optimizationObjectiveConfigInput</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.optimizationObjectiveInput">optimizationObjectiveInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.trainingStateInput">trainingStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.optimizationObjective">optimizationObjective</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.trainingState">trainingState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `engineFeaturesConfig`<sup>Required</sup> <a name="engineFeaturesConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.engineFeaturesConfig"></a>

```typescript
public readonly engineFeaturesConfig: DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference</a>

---

##### `optimizationObjectiveConfig`<sup>Required</sup> <a name="optimizationObjectiveConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.optimizationObjectiveConfig"></a>

```typescript
public readonly optimizationObjectiveConfig: DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference</a>

---

##### `engineFeaturesConfigInput`<sup>Optional</sup> <a name="engineFeaturesConfigInput" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.engineFeaturesConfigInput"></a>

```typescript
public readonly engineFeaturesConfigInput: DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig</a>

---

##### `optimizationObjectiveConfigInput`<sup>Optional</sup> <a name="optimizationObjectiveConfigInput" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.optimizationObjectiveConfigInput"></a>

```typescript
public readonly optimizationObjectiveConfigInput: DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig</a>

---

##### `optimizationObjectiveInput`<sup>Optional</sup> <a name="optimizationObjectiveInput" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.optimizationObjectiveInput"></a>

```typescript
public readonly optimizationObjectiveInput: string;
```

- *Type:* string

---

##### `trainingStateInput`<sup>Optional</sup> <a name="trainingStateInput" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.trainingStateInput"></a>

```typescript
public readonly trainingStateInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `optimizationObjective`<sup>Required</sup> <a name="optimizationObjective" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.optimizationObjective"></a>

```typescript
public readonly optimizationObjective: string;
```

- *Type:* string

---

##### `trainingState`<sup>Required</sup> <a name="trainingState" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.trainingState"></a>

```typescript
public readonly trainingState: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig</a>

---


### DiscoveryEngineRecommendationEngineTimeoutsOutputReference <a name="DiscoveryEngineRecommendationEngineTimeoutsOutputReference" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.Initializer"></a>

```typescript
import { discoveryEngineRecommendationEngine } from '@cdktf/provider-google'

new discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeouts">DiscoveryEngineRecommendationEngineTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DiscoveryEngineRecommendationEngineTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeouts">DiscoveryEngineRecommendationEngineTimeouts</a>

---



