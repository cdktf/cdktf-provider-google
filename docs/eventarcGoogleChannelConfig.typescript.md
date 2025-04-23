# `eventarcGoogleChannelConfig` Submodule <a name="`eventarcGoogleChannelConfig` Submodule" id="@cdktf/provider-google.eventarcGoogleChannelConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventarcGoogleChannelConfig <a name="EventarcGoogleChannelConfig" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/eventarc_google_channel_config google_eventarc_google_channel_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.Initializer"></a>

```typescript
import { eventarcGoogleChannelConfig } from '@cdktf/provider-google'

new eventarcGoogleChannelConfig.EventarcGoogleChannelConfig(scope: Construct, id: string, config: EventarcGoogleChannelConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigConfig">EventarcGoogleChannelConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigConfig">EventarcGoogleChannelConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.resetCryptoKeyName">resetCryptoKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.putTimeouts"></a>

```typescript
public putTimeouts(value: EventarcGoogleChannelConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeouts">EventarcGoogleChannelConfigTimeouts</a>

---

##### `resetCryptoKeyName` <a name="resetCryptoKeyName" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.resetCryptoKeyName"></a>

```typescript
public resetCryptoKeyName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a EventarcGoogleChannelConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.isConstruct"></a>

```typescript
import { eventarcGoogleChannelConfig } from '@cdktf/provider-google'

eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.isTerraformElement"></a>

```typescript
import { eventarcGoogleChannelConfig } from '@cdktf/provider-google'

eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.isTerraformResource"></a>

```typescript
import { eventarcGoogleChannelConfig } from '@cdktf/provider-google'

eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.generateConfigForImport"></a>

```typescript
import { eventarcGoogleChannelConfig } from '@cdktf/provider-google'

eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a EventarcGoogleChannelConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EventarcGoogleChannelConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EventarcGoogleChannelConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/eventarc_google_channel_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the EventarcGoogleChannelConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference">EventarcGoogleChannelConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.cryptoKeyNameInput">cryptoKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeouts">EventarcGoogleChannelConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.cryptoKeyName">cryptoKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.timeouts"></a>

```typescript
public readonly timeouts: EventarcGoogleChannelConfigTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference">EventarcGoogleChannelConfigTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `cryptoKeyNameInput`<sup>Optional</sup> <a name="cryptoKeyNameInput" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.cryptoKeyNameInput"></a>

```typescript
public readonly cryptoKeyNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | EventarcGoogleChannelConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeouts">EventarcGoogleChannelConfigTimeouts</a>

---

##### `cryptoKeyName`<sup>Required</sup> <a name="cryptoKeyName" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.cryptoKeyName"></a>

```typescript
public readonly cryptoKeyName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EventarcGoogleChannelConfigConfig <a name="EventarcGoogleChannelConfigConfig" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigConfig.Initializer"></a>

```typescript
import { eventarcGoogleChannelConfig } from '@cdktf/provider-google'

const eventarcGoogleChannelConfigConfig: eventarcGoogleChannelConfig.EventarcGoogleChannelConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigConfig.property.location">location</a></code> | <code>string</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigConfig.property.name">name</a></code> | <code>string</code> | Required. The resource name of the config. Must be in the format of, 'projects/{project}/locations/{location}/googleChannelConfig'. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigConfig.property.cryptoKeyName">cryptoKeyName</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/eventarc_google_channel_config#id EventarcGoogleChannelConfig#id}. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/eventarc_google_channel_config#project EventarcGoogleChannelConfig#project}. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeouts">EventarcGoogleChannelConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/eventarc_google_channel_config#location EventarcGoogleChannelConfig#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Required. The resource name of the config. Must be in the format of, 'projects/{project}/locations/{location}/googleChannelConfig'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/eventarc_google_channel_config#name EventarcGoogleChannelConfig#name}

---

##### `cryptoKeyName`<sup>Optional</sup> <a name="cryptoKeyName" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigConfig.property.cryptoKeyName"></a>

```typescript
public readonly cryptoKeyName: string;
```

- *Type:* string

Optional.

Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt their event data. It must match the pattern 'projects/* /locations/* /keyRings/* /cryptoKeys/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/eventarc_google_channel_config#crypto_key_name EventarcGoogleChannelConfig#crypto_key_name}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/eventarc_google_channel_config#id EventarcGoogleChannelConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/eventarc_google_channel_config#project EventarcGoogleChannelConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigConfig.property.timeouts"></a>

```typescript
public readonly timeouts: EventarcGoogleChannelConfigTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeouts">EventarcGoogleChannelConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/eventarc_google_channel_config#timeouts EventarcGoogleChannelConfig#timeouts}

---

### EventarcGoogleChannelConfigTimeouts <a name="EventarcGoogleChannelConfigTimeouts" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeouts.Initializer"></a>

```typescript
import { eventarcGoogleChannelConfig } from '@cdktf/provider-google'

const eventarcGoogleChannelConfigTimeouts: eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/eventarc_google_channel_config#create EventarcGoogleChannelConfig#create}. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/eventarc_google_channel_config#delete EventarcGoogleChannelConfig#delete}. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/eventarc_google_channel_config#update EventarcGoogleChannelConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/eventarc_google_channel_config#create EventarcGoogleChannelConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/eventarc_google_channel_config#delete EventarcGoogleChannelConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/eventarc_google_channel_config#update EventarcGoogleChannelConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### EventarcGoogleChannelConfigTimeoutsOutputReference <a name="EventarcGoogleChannelConfigTimeoutsOutputReference" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { eventarcGoogleChannelConfig } from '@cdktf/provider-google'

new eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeouts">EventarcGoogleChannelConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventarcGoogleChannelConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.eventarcGoogleChannelConfig.EventarcGoogleChannelConfigTimeouts">EventarcGoogleChannelConfigTimeouts</a>

---



