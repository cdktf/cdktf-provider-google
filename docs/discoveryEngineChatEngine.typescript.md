# `discoveryEngineChatEngine` Submodule <a name="`discoveryEngineChatEngine` Submodule" id="@cdktf/provider-google.discoveryEngineChatEngine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DiscoveryEngineChatEngine <a name="DiscoveryEngineChatEngine" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/discovery_engine_chat_engine google_discovery_engine_chat_engine}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.Initializer"></a>

```typescript
import { discoveryEngineChatEngine } from '@cdktf/provider-google'

new discoveryEngineChatEngine.DiscoveryEngineChatEngine(scope: Construct, id: string, config: DiscoveryEngineChatEngineConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig">DiscoveryEngineChatEngineConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig">DiscoveryEngineChatEngineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.putChatEngineConfig">putChatEngineConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.putCommonConfig">putCommonConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.resetCommonConfig">resetCommonConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.resetIndustryVertical">resetIndustryVertical</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putChatEngineConfig` <a name="putChatEngineConfig" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.putChatEngineConfig"></a>

```typescript
public putChatEngineConfig(value: DiscoveryEngineChatEngineChatEngineConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.putChatEngineConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfig">DiscoveryEngineChatEngineChatEngineConfig</a>

---

##### `putCommonConfig` <a name="putCommonConfig" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.putCommonConfig"></a>

```typescript
public putCommonConfig(value: DiscoveryEngineChatEngineCommonConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.putCommonConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfig">DiscoveryEngineChatEngineCommonConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.putTimeouts"></a>

```typescript
public putTimeouts(value: DiscoveryEngineChatEngineTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeouts">DiscoveryEngineChatEngineTimeouts</a>

---

##### `resetCommonConfig` <a name="resetCommonConfig" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.resetCommonConfig"></a>

```typescript
public resetCommonConfig(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIndustryVertical` <a name="resetIndustryVertical" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.resetIndustryVertical"></a>

```typescript
public resetIndustryVertical(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DiscoveryEngineChatEngine resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.isConstruct"></a>

```typescript
import { discoveryEngineChatEngine } from '@cdktf/provider-google'

discoveryEngineChatEngine.DiscoveryEngineChatEngine.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.isTerraformElement"></a>

```typescript
import { discoveryEngineChatEngine } from '@cdktf/provider-google'

discoveryEngineChatEngine.DiscoveryEngineChatEngine.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.isTerraformResource"></a>

```typescript
import { discoveryEngineChatEngine } from '@cdktf/provider-google'

discoveryEngineChatEngine.DiscoveryEngineChatEngine.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.generateConfigForImport"></a>

```typescript
import { discoveryEngineChatEngine } from '@cdktf/provider-google'

discoveryEngineChatEngine.DiscoveryEngineChatEngine.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DiscoveryEngineChatEngine resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DiscoveryEngineChatEngine to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DiscoveryEngineChatEngine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/discovery_engine_chat_engine#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DiscoveryEngineChatEngine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.chatEngineConfig">chatEngineConfig</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference">DiscoveryEngineChatEngineChatEngineConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.chatEngineMetadata">chatEngineMetadata</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataList">DiscoveryEngineChatEngineChatEngineMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.commonConfig">commonConfig</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference">DiscoveryEngineChatEngineCommonConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference">DiscoveryEngineChatEngineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.chatEngineConfigInput">chatEngineConfigInput</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfig">DiscoveryEngineChatEngineChatEngineConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.collectionIdInput">collectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.commonConfigInput">commonConfigInput</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfig">DiscoveryEngineChatEngineCommonConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.dataStoreIdsInput">dataStoreIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.engineIdInput">engineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.industryVerticalInput">industryVerticalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeouts">DiscoveryEngineChatEngineTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.collectionId">collectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.dataStoreIds">dataStoreIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.engineId">engineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.industryVertical">industryVertical</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `chatEngineConfig`<sup>Required</sup> <a name="chatEngineConfig" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.chatEngineConfig"></a>

```typescript
public readonly chatEngineConfig: DiscoveryEngineChatEngineChatEngineConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference">DiscoveryEngineChatEngineChatEngineConfigOutputReference</a>

---

##### `chatEngineMetadata`<sup>Required</sup> <a name="chatEngineMetadata" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.chatEngineMetadata"></a>

```typescript
public readonly chatEngineMetadata: DiscoveryEngineChatEngineChatEngineMetadataList;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataList">DiscoveryEngineChatEngineChatEngineMetadataList</a>

---

##### `commonConfig`<sup>Required</sup> <a name="commonConfig" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.commonConfig"></a>

```typescript
public readonly commonConfig: DiscoveryEngineChatEngineCommonConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference">DiscoveryEngineChatEngineCommonConfigOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.timeouts"></a>

```typescript
public readonly timeouts: DiscoveryEngineChatEngineTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference">DiscoveryEngineChatEngineTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `chatEngineConfigInput`<sup>Optional</sup> <a name="chatEngineConfigInput" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.chatEngineConfigInput"></a>

```typescript
public readonly chatEngineConfigInput: DiscoveryEngineChatEngineChatEngineConfig;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfig">DiscoveryEngineChatEngineChatEngineConfig</a>

---

##### `collectionIdInput`<sup>Optional</sup> <a name="collectionIdInput" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.collectionIdInput"></a>

```typescript
public readonly collectionIdInput: string;
```

- *Type:* string

---

##### `commonConfigInput`<sup>Optional</sup> <a name="commonConfigInput" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.commonConfigInput"></a>

```typescript
public readonly commonConfigInput: DiscoveryEngineChatEngineCommonConfig;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfig">DiscoveryEngineChatEngineCommonConfig</a>

---

##### `dataStoreIdsInput`<sup>Optional</sup> <a name="dataStoreIdsInput" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.dataStoreIdsInput"></a>

```typescript
public readonly dataStoreIdsInput: string[];
```

- *Type:* string[]

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `engineIdInput`<sup>Optional</sup> <a name="engineIdInput" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.engineIdInput"></a>

```typescript
public readonly engineIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `industryVerticalInput`<sup>Optional</sup> <a name="industryVerticalInput" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.industryVerticalInput"></a>

```typescript
public readonly industryVerticalInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DiscoveryEngineChatEngineTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeouts">DiscoveryEngineChatEngineTimeouts</a>

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.collectionId"></a>

```typescript
public readonly collectionId: string;
```

- *Type:* string

---

##### `dataStoreIds`<sup>Required</sup> <a name="dataStoreIds" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.dataStoreIds"></a>

```typescript
public readonly dataStoreIds: string[];
```

- *Type:* string[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `engineId`<sup>Required</sup> <a name="engineId" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.engineId"></a>

```typescript
public readonly engineId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `industryVertical`<sup>Required</sup> <a name="industryVertical" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.industryVertical"></a>

```typescript
public readonly industryVertical: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DiscoveryEngineChatEngineChatEngineConfig <a name="DiscoveryEngineChatEngineChatEngineConfig" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfig.Initializer"></a>

```typescript
import { discoveryEngineChatEngine } from '@cdktf/provider-google'

const discoveryEngineChatEngineChatEngineConfig: discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfig.property.agentCreationConfig">agentCreationConfig</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig">DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig</a></code> | agent_creation_config block. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfig.property.allowCrossRegion">allowCrossRegion</a></code> | <code>boolean \| cdktf.IResolvable</code> | If the flag set to true, we allow the agent and engine are in different locations, otherwise the agent and engine are required to be in the same location. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfig.property.dialogflowAgentToLink">dialogflowAgentToLink</a></code> | <code>string</code> | The resource name of an existing Dialogflow agent to link to this Chat Engine. |

---

##### `agentCreationConfig`<sup>Optional</sup> <a name="agentCreationConfig" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfig.property.agentCreationConfig"></a>

```typescript
public readonly agentCreationConfig: DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig">DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig</a>

agent_creation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/discovery_engine_chat_engine#agent_creation_config DiscoveryEngineChatEngine#agent_creation_config}

---

##### `allowCrossRegion`<sup>Optional</sup> <a name="allowCrossRegion" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfig.property.allowCrossRegion"></a>

```typescript
public readonly allowCrossRegion: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If the flag set to true, we allow the agent and engine are in different locations, otherwise the agent and engine are required to be in the same location.

The flag is set to false by default.
Note that the 'allow_cross_region' are one-time consumed by and passed
to EngineService.CreateEngine. It means they cannot be retrieved using
EngineService.GetEngine or EngineService.ListEngines API after engine
creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/discovery_engine_chat_engine#allow_cross_region DiscoveryEngineChatEngine#allow_cross_region}

---

##### `dialogflowAgentToLink`<sup>Optional</sup> <a name="dialogflowAgentToLink" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfig.property.dialogflowAgentToLink"></a>

```typescript
public readonly dialogflowAgentToLink: string;
```

- *Type:* string

The resource name of an existing Dialogflow agent to link to this Chat Engine.

Format: 'projects/<Project_ID>/locations/<Location_ID>/agents/<Agent_ID>'.
Exactly one of 'agent_creation_config' or 'dialogflow_agent_to_link' must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/discovery_engine_chat_engine#dialogflow_agent_to_link DiscoveryEngineChatEngine#dialogflow_agent_to_link}

---

### DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig <a name="DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig.Initializer"></a>

```typescript
import { discoveryEngineChatEngine } from '@cdktf/provider-google'

const discoveryEngineChatEngineChatEngineConfigAgentCreationConfig: discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig.property.defaultLanguageCode">defaultLanguageCode</a></code> | <code>string</code> | The default language of the agent as a language tag. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig.property.timeZone">timeZone</a></code> | <code>string</code> | The time zone of the agent from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York, Europe/Paris. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig.property.business">business</a></code> | <code>string</code> | Name of the company, organization or other entity that the agent represents. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig.property.location">location</a></code> | <code>string</code> | Agent location for Agent creation, currently supported values: global/us/eu, it needs to be the same region as the Chat Engine. |

---

##### `defaultLanguageCode`<sup>Required</sup> <a name="defaultLanguageCode" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig.property.defaultLanguageCode"></a>

```typescript
public readonly defaultLanguageCode: string;
```

- *Type:* string

The default language of the agent as a language tag.

See [Language Support](https://cloud.google.com/dialogflow/docs/reference/language) for a list of the currently supported language codes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/discovery_engine_chat_engine#default_language_code DiscoveryEngineChatEngine#default_language_code}

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

The time zone of the agent from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York, Europe/Paris.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/discovery_engine_chat_engine#time_zone DiscoveryEngineChatEngine#time_zone}

---

##### `business`<sup>Optional</sup> <a name="business" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig.property.business"></a>

```typescript
public readonly business: string;
```

- *Type:* string

Name of the company, organization or other entity that the agent represents.

Used for knowledge connector LLM prompt and for knowledge search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/discovery_engine_chat_engine#business DiscoveryEngineChatEngine#business}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Agent location for Agent creation, currently supported values: global/us/eu, it needs to be the same region as the Chat Engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/discovery_engine_chat_engine#location DiscoveryEngineChatEngine#location}

---

### DiscoveryEngineChatEngineChatEngineMetadata <a name="DiscoveryEngineChatEngineChatEngineMetadata" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadata.Initializer"></a>

```typescript
import { discoveryEngineChatEngine } from '@cdktf/provider-google'

const discoveryEngineChatEngineChatEngineMetadata: discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadata = { ... }
```


### DiscoveryEngineChatEngineCommonConfig <a name="DiscoveryEngineChatEngineCommonConfig" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfig.Initializer"></a>

```typescript
import { discoveryEngineChatEngine } from '@cdktf/provider-google'

const discoveryEngineChatEngineCommonConfig: discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfig.property.companyName">companyName</a></code> | <code>string</code> | The name of the company, business or entity that is associated with the engine. |

---

##### `companyName`<sup>Optional</sup> <a name="companyName" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfig.property.companyName"></a>

```typescript
public readonly companyName: string;
```

- *Type:* string

The name of the company, business or entity that is associated with the engine.

Setting this may help improve LLM related features.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/discovery_engine_chat_engine#company_name DiscoveryEngineChatEngine#company_name}

---

### DiscoveryEngineChatEngineConfig <a name="DiscoveryEngineChatEngineConfig" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.Initializer"></a>

```typescript
import { discoveryEngineChatEngine } from '@cdktf/provider-google'

const discoveryEngineChatEngineConfig: discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.chatEngineConfig">chatEngineConfig</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfig">DiscoveryEngineChatEngineChatEngineConfig</a></code> | chat_engine_config block. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.collectionId">collectionId</a></code> | <code>string</code> | The collection ID. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.dataStoreIds">dataStoreIds</a></code> | <code>string[]</code> | The data stores associated with this engine. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.displayName">displayName</a></code> | <code>string</code> | The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.engineId">engineId</a></code> | <code>string</code> | The ID to use for chat engine. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.location">location</a></code> | <code>string</code> | Location. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.commonConfig">commonConfig</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfig">DiscoveryEngineChatEngineCommonConfig</a></code> | common_config block. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/discovery_engine_chat_engine#id DiscoveryEngineChatEngine#id}. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.industryVertical">industryVertical</a></code> | <code>string</code> | The industry vertical that the chat engine registers. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/discovery_engine_chat_engine#project DiscoveryEngineChatEngine#project}. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeouts">DiscoveryEngineChatEngineTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `chatEngineConfig`<sup>Required</sup> <a name="chatEngineConfig" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.chatEngineConfig"></a>

```typescript
public readonly chatEngineConfig: DiscoveryEngineChatEngineChatEngineConfig;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfig">DiscoveryEngineChatEngineChatEngineConfig</a>

chat_engine_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/discovery_engine_chat_engine#chat_engine_config DiscoveryEngineChatEngine#chat_engine_config}

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.collectionId"></a>

```typescript
public readonly collectionId: string;
```

- *Type:* string

The collection ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/discovery_engine_chat_engine#collection_id DiscoveryEngineChatEngine#collection_id}

---

##### `dataStoreIds`<sup>Required</sup> <a name="dataStoreIds" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.dataStoreIds"></a>

```typescript
public readonly dataStoreIds: string[];
```

- *Type:* string[]

The data stores associated with this engine.

Multiple DataStores in the same Collection can be associated here. All listed DataStores must be 'SOLUTION_TYPE_CHAT'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/discovery_engine_chat_engine#data_store_ids DiscoveryEngineChatEngine#data_store_ids}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/discovery_engine_chat_engine#display_name DiscoveryEngineChatEngine#display_name}

---

##### `engineId`<sup>Required</sup> <a name="engineId" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.engineId"></a>

```typescript
public readonly engineId: string;
```

- *Type:* string

The ID to use for chat engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/discovery_engine_chat_engine#engine_id DiscoveryEngineChatEngine#engine_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/discovery_engine_chat_engine#location DiscoveryEngineChatEngine#location}

---

##### `commonConfig`<sup>Optional</sup> <a name="commonConfig" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.commonConfig"></a>

```typescript
public readonly commonConfig: DiscoveryEngineChatEngineCommonConfig;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfig">DiscoveryEngineChatEngineCommonConfig</a>

common_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/discovery_engine_chat_engine#common_config DiscoveryEngineChatEngine#common_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/discovery_engine_chat_engine#id DiscoveryEngineChatEngine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `industryVertical`<sup>Optional</sup> <a name="industryVertical" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.industryVertical"></a>

```typescript
public readonly industryVertical: string;
```

- *Type:* string

The industry vertical that the chat engine registers.

Vertical on Engine has to match vertical of the DataStore linked to the engine. Default value: "GENERIC" Possible values: ["GENERIC"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/discovery_engine_chat_engine#industry_vertical DiscoveryEngineChatEngine#industry_vertical}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/discovery_engine_chat_engine#project DiscoveryEngineChatEngine#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DiscoveryEngineChatEngineTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeouts">DiscoveryEngineChatEngineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/discovery_engine_chat_engine#timeouts DiscoveryEngineChatEngine#timeouts}

---

### DiscoveryEngineChatEngineTimeouts <a name="DiscoveryEngineChatEngineTimeouts" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeouts.Initializer"></a>

```typescript
import { discoveryEngineChatEngine } from '@cdktf/provider-google'

const discoveryEngineChatEngineTimeouts: discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/discovery_engine_chat_engine#create DiscoveryEngineChatEngine#create}. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/discovery_engine_chat_engine#delete DiscoveryEngineChatEngine#delete}. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/discovery_engine_chat_engine#update DiscoveryEngineChatEngine#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/discovery_engine_chat_engine#create DiscoveryEngineChatEngine#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/discovery_engine_chat_engine#delete DiscoveryEngineChatEngine#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/discovery_engine_chat_engine#update DiscoveryEngineChatEngine#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference <a name="DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.Initializer"></a>

```typescript
import { discoveryEngineChatEngine } from '@cdktf/provider-google'

new discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.resetBusiness">resetBusiness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.resetLocation">resetLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBusiness` <a name="resetBusiness" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.resetBusiness"></a>

```typescript
public resetBusiness(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.resetLocation"></a>

```typescript
public resetLocation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.businessInput">businessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.defaultLanguageCodeInput">defaultLanguageCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.business">business</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.defaultLanguageCode">defaultLanguageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig">DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `businessInput`<sup>Optional</sup> <a name="businessInput" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.businessInput"></a>

```typescript
public readonly businessInput: string;
```

- *Type:* string

---

##### `defaultLanguageCodeInput`<sup>Optional</sup> <a name="defaultLanguageCodeInput" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.defaultLanguageCodeInput"></a>

```typescript
public readonly defaultLanguageCodeInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.timeZoneInput"></a>

```typescript
public readonly timeZoneInput: string;
```

- *Type:* string

---

##### `business`<sup>Required</sup> <a name="business" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.business"></a>

```typescript
public readonly business: string;
```

- *Type:* string

---

##### `defaultLanguageCode`<sup>Required</sup> <a name="defaultLanguageCode" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.defaultLanguageCode"></a>

```typescript
public readonly defaultLanguageCode: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig">DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig</a>

---


### DiscoveryEngineChatEngineChatEngineConfigOutputReference <a name="DiscoveryEngineChatEngineChatEngineConfigOutputReference" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.Initializer"></a>

```typescript
import { discoveryEngineChatEngine } from '@cdktf/provider-google'

new discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.putAgentCreationConfig">putAgentCreationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.resetAgentCreationConfig">resetAgentCreationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.resetAllowCrossRegion">resetAllowCrossRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.resetDialogflowAgentToLink">resetDialogflowAgentToLink</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAgentCreationConfig` <a name="putAgentCreationConfig" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.putAgentCreationConfig"></a>

```typescript
public putAgentCreationConfig(value: DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.putAgentCreationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig">DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig</a>

---

##### `resetAgentCreationConfig` <a name="resetAgentCreationConfig" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.resetAgentCreationConfig"></a>

```typescript
public resetAgentCreationConfig(): void
```

##### `resetAllowCrossRegion` <a name="resetAllowCrossRegion" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.resetAllowCrossRegion"></a>

```typescript
public resetAllowCrossRegion(): void
```

##### `resetDialogflowAgentToLink` <a name="resetDialogflowAgentToLink" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.resetDialogflowAgentToLink"></a>

```typescript
public resetDialogflowAgentToLink(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.property.agentCreationConfig">agentCreationConfig</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference">DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.property.agentCreationConfigInput">agentCreationConfigInput</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig">DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.property.allowCrossRegionInput">allowCrossRegionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.property.dialogflowAgentToLinkInput">dialogflowAgentToLinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.property.allowCrossRegion">allowCrossRegion</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.property.dialogflowAgentToLink">dialogflowAgentToLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfig">DiscoveryEngineChatEngineChatEngineConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `agentCreationConfig`<sup>Required</sup> <a name="agentCreationConfig" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.property.agentCreationConfig"></a>

```typescript
public readonly agentCreationConfig: DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference">DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference</a>

---

##### `agentCreationConfigInput`<sup>Optional</sup> <a name="agentCreationConfigInput" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.property.agentCreationConfigInput"></a>

```typescript
public readonly agentCreationConfigInput: DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig">DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig</a>

---

##### `allowCrossRegionInput`<sup>Optional</sup> <a name="allowCrossRegionInput" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.property.allowCrossRegionInput"></a>

```typescript
public readonly allowCrossRegionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dialogflowAgentToLinkInput`<sup>Optional</sup> <a name="dialogflowAgentToLinkInput" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.property.dialogflowAgentToLinkInput"></a>

```typescript
public readonly dialogflowAgentToLinkInput: string;
```

- *Type:* string

---

##### `allowCrossRegion`<sup>Required</sup> <a name="allowCrossRegion" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.property.allowCrossRegion"></a>

```typescript
public readonly allowCrossRegion: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dialogflowAgentToLink`<sup>Required</sup> <a name="dialogflowAgentToLink" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.property.dialogflowAgentToLink"></a>

```typescript
public readonly dialogflowAgentToLink: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DiscoveryEngineChatEngineChatEngineConfig;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfig">DiscoveryEngineChatEngineChatEngineConfig</a>

---


### DiscoveryEngineChatEngineChatEngineMetadataList <a name="DiscoveryEngineChatEngineChatEngineMetadataList" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataList.Initializer"></a>

```typescript
import { discoveryEngineChatEngine } from '@cdktf/provider-google'

new discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataList.get"></a>

```typescript
public get(index: number): DiscoveryEngineChatEngineChatEngineMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DiscoveryEngineChatEngineChatEngineMetadataOutputReference <a name="DiscoveryEngineChatEngineChatEngineMetadataOutputReference" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.Initializer"></a>

```typescript
import { discoveryEngineChatEngine } from '@cdktf/provider-google'

new discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.property.dialogflowAgent">dialogflowAgent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadata">DiscoveryEngineChatEngineChatEngineMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dialogflowAgent`<sup>Required</sup> <a name="dialogflowAgent" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.property.dialogflowAgent"></a>

```typescript
public readonly dialogflowAgent: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DiscoveryEngineChatEngineChatEngineMetadata;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadata">DiscoveryEngineChatEngineChatEngineMetadata</a>

---


### DiscoveryEngineChatEngineCommonConfigOutputReference <a name="DiscoveryEngineChatEngineCommonConfigOutputReference" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.Initializer"></a>

```typescript
import { discoveryEngineChatEngine } from '@cdktf/provider-google'

new discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.resetCompanyName">resetCompanyName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCompanyName` <a name="resetCompanyName" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.resetCompanyName"></a>

```typescript
public resetCompanyName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.property.companyNameInput">companyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.property.companyName">companyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfig">DiscoveryEngineChatEngineCommonConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `companyNameInput`<sup>Optional</sup> <a name="companyNameInput" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.property.companyNameInput"></a>

```typescript
public readonly companyNameInput: string;
```

- *Type:* string

---

##### `companyName`<sup>Required</sup> <a name="companyName" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.property.companyName"></a>

```typescript
public readonly companyName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DiscoveryEngineChatEngineCommonConfig;
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfig">DiscoveryEngineChatEngineCommonConfig</a>

---


### DiscoveryEngineChatEngineTimeoutsOutputReference <a name="DiscoveryEngineChatEngineTimeoutsOutputReference" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.Initializer"></a>

```typescript
import { discoveryEngineChatEngine } from '@cdktf/provider-google'

new discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeouts">DiscoveryEngineChatEngineTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DiscoveryEngineChatEngineTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeouts">DiscoveryEngineChatEngineTimeouts</a>

---



