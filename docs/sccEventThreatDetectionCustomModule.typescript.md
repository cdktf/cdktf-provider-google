# `sccEventThreatDetectionCustomModule` Submodule <a name="`sccEventThreatDetectionCustomModule` Submodule" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SccEventThreatDetectionCustomModule <a name="SccEventThreatDetectionCustomModule" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/scc_event_threat_detection_custom_module google_scc_event_threat_detection_custom_module}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.Initializer"></a>

```typescript
import { sccEventThreatDetectionCustomModule } from '@cdktf/provider-google'

new sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule(scope: Construct, id: string, config: SccEventThreatDetectionCustomModuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleConfig">SccEventThreatDetectionCustomModuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleConfig">SccEventThreatDetectionCustomModuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.putTimeouts"></a>

```typescript
public putTimeouts(value: SccEventThreatDetectionCustomModuleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeouts">SccEventThreatDetectionCustomModuleTimeouts</a>

---

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SccEventThreatDetectionCustomModule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.isConstruct"></a>

```typescript
import { sccEventThreatDetectionCustomModule } from '@cdktf/provider-google'

sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.isTerraformElement"></a>

```typescript
import { sccEventThreatDetectionCustomModule } from '@cdktf/provider-google'

sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.isTerraformResource"></a>

```typescript
import { sccEventThreatDetectionCustomModule } from '@cdktf/provider-google'

sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.generateConfigForImport"></a>

```typescript
import { sccEventThreatDetectionCustomModule } from '@cdktf/provider-google'

sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SccEventThreatDetectionCustomModule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SccEventThreatDetectionCustomModule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SccEventThreatDetectionCustomModule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/scc_event_threat_detection_custom_module#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SccEventThreatDetectionCustomModule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.property.lastEditor">lastEditor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeoutsOutputReference">SccEventThreatDetectionCustomModuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.property.configInput">configInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.property.enablementStateInput">enablementStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.property.organizationInput">organizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeouts">SccEventThreatDetectionCustomModuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.property.config">config</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.property.enablementState">enablementState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.property.organization">organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `lastEditor`<sup>Required</sup> <a name="lastEditor" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.property.lastEditor"></a>

```typescript
public readonly lastEditor: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.property.timeouts"></a>

```typescript
public readonly timeouts: SccEventThreatDetectionCustomModuleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeoutsOutputReference">SccEventThreatDetectionCustomModuleTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.property.configInput"></a>

```typescript
public readonly configInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `enablementStateInput`<sup>Optional</sup> <a name="enablementStateInput" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.property.enablementStateInput"></a>

```typescript
public readonly enablementStateInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.property.organizationInput"></a>

```typescript
public readonly organizationInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SccEventThreatDetectionCustomModuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeouts">SccEventThreatDetectionCustomModuleTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.property.config"></a>

```typescript
public readonly config: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `enablementState`<sup>Required</sup> <a name="enablementState" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.property.enablementState"></a>

```typescript
public readonly enablementState: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SccEventThreatDetectionCustomModuleConfig <a name="SccEventThreatDetectionCustomModuleConfig" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleConfig.Initializer"></a>

```typescript
import { sccEventThreatDetectionCustomModule } from '@cdktf/provider-google'

const sccEventThreatDetectionCustomModuleConfig: sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleConfig.property.config">config</a></code> | <code>string</code> | Config for the module. |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleConfig.property.enablementState">enablementState</a></code> | <code>string</code> | The state of enablement for the module at the given level of the hierarchy. Possible values: ["ENABLED", "DISABLED"]. |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleConfig.property.organization">organization</a></code> | <code>string</code> | Numerical ID of the parent organization. |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleConfig.property.type">type</a></code> | <code>string</code> | Immutable. Type for the module. e.g. CONFIGURABLE_BAD_IP. |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleConfig.property.displayName">displayName</a></code> | <code>string</code> | The human readable name to be displayed for the module. |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/scc_event_threat_detection_custom_module#id SccEventThreatDetectionCustomModule#id}. |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeouts">SccEventThreatDetectionCustomModuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleConfig.property.config"></a>

```typescript
public readonly config: string;
```

- *Type:* string

Config for the module.

For the resident module, its config value is defined at this level.
For the inherited module, its config value is inherited from the ancestor module.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/scc_event_threat_detection_custom_module#config SccEventThreatDetectionCustomModule#config}

---

##### `enablementState`<sup>Required</sup> <a name="enablementState" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleConfig.property.enablementState"></a>

```typescript
public readonly enablementState: string;
```

- *Type:* string

The state of enablement for the module at the given level of the hierarchy. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/scc_event_threat_detection_custom_module#enablement_state SccEventThreatDetectionCustomModule#enablement_state}

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleConfig.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

Numerical ID of the parent organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/scc_event_threat_detection_custom_module#organization SccEventThreatDetectionCustomModule#organization}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Immutable. Type for the module. e.g. CONFIGURABLE_BAD_IP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/scc_event_threat_detection_custom_module#type SccEventThreatDetectionCustomModule#type}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The human readable name to be displayed for the module.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/scc_event_threat_detection_custom_module#display_name SccEventThreatDetectionCustomModule#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/scc_event_threat_detection_custom_module#id SccEventThreatDetectionCustomModule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SccEventThreatDetectionCustomModuleTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeouts">SccEventThreatDetectionCustomModuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/scc_event_threat_detection_custom_module#timeouts SccEventThreatDetectionCustomModule#timeouts}

---

### SccEventThreatDetectionCustomModuleTimeouts <a name="SccEventThreatDetectionCustomModuleTimeouts" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeouts.Initializer"></a>

```typescript
import { sccEventThreatDetectionCustomModule } from '@cdktf/provider-google'

const sccEventThreatDetectionCustomModuleTimeouts: sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/scc_event_threat_detection_custom_module#create SccEventThreatDetectionCustomModule#create}. |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/scc_event_threat_detection_custom_module#delete SccEventThreatDetectionCustomModule#delete}. |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/scc_event_threat_detection_custom_module#update SccEventThreatDetectionCustomModule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/scc_event_threat_detection_custom_module#create SccEventThreatDetectionCustomModule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/scc_event_threat_detection_custom_module#delete SccEventThreatDetectionCustomModule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/scc_event_threat_detection_custom_module#update SccEventThreatDetectionCustomModule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SccEventThreatDetectionCustomModuleTimeoutsOutputReference <a name="SccEventThreatDetectionCustomModuleTimeoutsOutputReference" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeoutsOutputReference.Initializer"></a>

```typescript
import { sccEventThreatDetectionCustomModule } from '@cdktf/provider-google'

new sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeouts">SccEventThreatDetectionCustomModuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SccEventThreatDetectionCustomModuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.sccEventThreatDetectionCustomModule.SccEventThreatDetectionCustomModuleTimeouts">SccEventThreatDetectionCustomModuleTimeouts</a>

---



