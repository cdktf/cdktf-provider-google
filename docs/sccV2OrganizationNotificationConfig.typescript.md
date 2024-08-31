# `sccV2OrganizationNotificationConfig` Submodule <a name="`sccV2OrganizationNotificationConfig` Submodule" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SccV2OrganizationNotificationConfig <a name="SccV2OrganizationNotificationConfig" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/scc_v2_organization_notification_config google_scc_v2_organization_notification_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.Initializer"></a>

```typescript
import { sccV2OrganizationNotificationConfig } from '@cdktf/provider-google'

new sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig(scope: Construct, id: string, config: SccV2OrganizationNotificationConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig">SccV2OrganizationNotificationConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig">SccV2OrganizationNotificationConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.putStreamingConfig">putStreamingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putStreamingConfig` <a name="putStreamingConfig" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.putStreamingConfig"></a>

```typescript
public putStreamingConfig(value: SccV2OrganizationNotificationConfigStreamingConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.putStreamingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfig">SccV2OrganizationNotificationConfigStreamingConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.putTimeouts"></a>

```typescript
public putTimeouts(value: SccV2OrganizationNotificationConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeouts">SccV2OrganizationNotificationConfigTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SccV2OrganizationNotificationConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.isConstruct"></a>

```typescript
import { sccV2OrganizationNotificationConfig } from '@cdktf/provider-google'

sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.isTerraformElement"></a>

```typescript
import { sccV2OrganizationNotificationConfig } from '@cdktf/provider-google'

sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.isTerraformResource"></a>

```typescript
import { sccV2OrganizationNotificationConfig } from '@cdktf/provider-google'

sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.generateConfigForImport"></a>

```typescript
import { sccV2OrganizationNotificationConfig } from '@cdktf/provider-google'

sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SccV2OrganizationNotificationConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SccV2OrganizationNotificationConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SccV2OrganizationNotificationConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/scc_v2_organization_notification_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SccV2OrganizationNotificationConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.streamingConfig">streamingConfig</a></code> | <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference">SccV2OrganizationNotificationConfigStreamingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference">SccV2OrganizationNotificationConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.configIdInput">configIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.organizationInput">organizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.pubsubTopicInput">pubsubTopicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.streamingConfigInput">streamingConfigInput</a></code> | <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfig">SccV2OrganizationNotificationConfigStreamingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeouts">SccV2OrganizationNotificationConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.configId">configId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.organization">organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.pubsubTopic">pubsubTopic</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

---

##### `streamingConfig`<sup>Required</sup> <a name="streamingConfig" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.streamingConfig"></a>

```typescript
public readonly streamingConfig: SccV2OrganizationNotificationConfigStreamingConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference">SccV2OrganizationNotificationConfigStreamingConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SccV2OrganizationNotificationConfigTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference">SccV2OrganizationNotificationConfigTimeoutsOutputReference</a>

---

##### `configIdInput`<sup>Optional</sup> <a name="configIdInput" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.configIdInput"></a>

```typescript
public readonly configIdInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.organizationInput"></a>

```typescript
public readonly organizationInput: string;
```

- *Type:* string

---

##### `pubsubTopicInput`<sup>Optional</sup> <a name="pubsubTopicInput" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.pubsubTopicInput"></a>

```typescript
public readonly pubsubTopicInput: string;
```

- *Type:* string

---

##### `streamingConfigInput`<sup>Optional</sup> <a name="streamingConfigInput" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.streamingConfigInput"></a>

```typescript
public readonly streamingConfigInput: SccV2OrganizationNotificationConfigStreamingConfig;
```

- *Type:* <a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfig">SccV2OrganizationNotificationConfigStreamingConfig</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SccV2OrganizationNotificationConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeouts">SccV2OrganizationNotificationConfigTimeouts</a>

---

##### `configId`<sup>Required</sup> <a name="configId" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.configId"></a>

```typescript
public readonly configId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

---

##### `pubsubTopic`<sup>Required</sup> <a name="pubsubTopic" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.pubsubTopic"></a>

```typescript
public readonly pubsubTopic: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SccV2OrganizationNotificationConfigConfig <a name="SccV2OrganizationNotificationConfigConfig" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.Initializer"></a>

```typescript
import { sccV2OrganizationNotificationConfig } from '@cdktf/provider-google'

const sccV2OrganizationNotificationConfigConfig: sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.configId">configId</a></code> | <code>string</code> | This must be unique within the organization. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.organization">organization</a></code> | <code>string</code> | The organization whose Cloud Security Command Center the Notification Config lives in. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.pubsubTopic">pubsubTopic</a></code> | <code>string</code> | The Pub/Sub topic to send notifications to. Its format is "projects/[project_id]/topics/[topic]". |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.streamingConfig">streamingConfig</a></code> | <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfig">SccV2OrganizationNotificationConfigStreamingConfig</a></code> | streaming_config block. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.description">description</a></code> | <code>string</code> | The description of the notification config (max of 1024 characters). |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/scc_v2_organization_notification_config#id SccV2OrganizationNotificationConfig#id}. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.location">location</a></code> | <code>string</code> | location Id is provided by organization. If not provided, Use global as default. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeouts">SccV2OrganizationNotificationConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `configId`<sup>Required</sup> <a name="configId" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.configId"></a>

```typescript
public readonly configId: string;
```

- *Type:* string

This must be unique within the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/scc_v2_organization_notification_config#config_id SccV2OrganizationNotificationConfig#config_id}

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

The organization whose Cloud Security Command Center the Notification Config lives in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/scc_v2_organization_notification_config#organization SccV2OrganizationNotificationConfig#organization}

---

##### `pubsubTopic`<sup>Required</sup> <a name="pubsubTopic" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.pubsubTopic"></a>

```typescript
public readonly pubsubTopic: string;
```

- *Type:* string

The Pub/Sub topic to send notifications to. Its format is "projects/[project_id]/topics/[topic]".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/scc_v2_organization_notification_config#pubsub_topic SccV2OrganizationNotificationConfig#pubsub_topic}

---

##### `streamingConfig`<sup>Required</sup> <a name="streamingConfig" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.streamingConfig"></a>

```typescript
public readonly streamingConfig: SccV2OrganizationNotificationConfigStreamingConfig;
```

- *Type:* <a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfig">SccV2OrganizationNotificationConfigStreamingConfig</a>

streaming_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/scc_v2_organization_notification_config#streaming_config SccV2OrganizationNotificationConfig#streaming_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the notification config (max of 1024 characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/scc_v2_organization_notification_config#description SccV2OrganizationNotificationConfig#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/scc_v2_organization_notification_config#id SccV2OrganizationNotificationConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

location Id is provided by organization. If not provided, Use global as default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/scc_v2_organization_notification_config#location SccV2OrganizationNotificationConfig#location}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SccV2OrganizationNotificationConfigTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeouts">SccV2OrganizationNotificationConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/scc_v2_organization_notification_config#timeouts SccV2OrganizationNotificationConfig#timeouts}

---

### SccV2OrganizationNotificationConfigStreamingConfig <a name="SccV2OrganizationNotificationConfigStreamingConfig" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfig.Initializer"></a>

```typescript
import { sccV2OrganizationNotificationConfig } from '@cdktf/provider-google'

const sccV2OrganizationNotificationConfigStreamingConfig: sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfig.property.filter">filter</a></code> | <code>string</code> | Expression that defines the filter to apply across create/update events of assets or findings as specified by the event type. |

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfig.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

Expression that defines the filter to apply across create/update events of assets or findings as specified by the event type.

The
expression is a list of zero or more restrictions combined via
logical operators AND and OR. Parentheses are supported, and OR
has higher precedence than AND.

Restrictions have the form <field> <operator> <value> and may have
a - character in front of them to indicate negation. The fields
map to those defined in the corresponding resource.

The supported operators are:

* = for all value types.
* >, <, >=, <= for integer values.
* :, meaning substring matching, for strings.

The supported value types are:

* string literals in quotes.
* integer literals without quotes.
* boolean literals true and false without quotes.

See
[Filtering notifications](https://cloud.google.com/security-command-center/docs/how-to-api-filter-notifications)
for information on how to write a filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/scc_v2_organization_notification_config#filter SccV2OrganizationNotificationConfig#filter}

---

### SccV2OrganizationNotificationConfigTimeouts <a name="SccV2OrganizationNotificationConfigTimeouts" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeouts.Initializer"></a>

```typescript
import { sccV2OrganizationNotificationConfig } from '@cdktf/provider-google'

const sccV2OrganizationNotificationConfigTimeouts: sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/scc_v2_organization_notification_config#create SccV2OrganizationNotificationConfig#create}. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/scc_v2_organization_notification_config#delete SccV2OrganizationNotificationConfig#delete}. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/scc_v2_organization_notification_config#update SccV2OrganizationNotificationConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/scc_v2_organization_notification_config#create SccV2OrganizationNotificationConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/scc_v2_organization_notification_config#delete SccV2OrganizationNotificationConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/scc_v2_organization_notification_config#update SccV2OrganizationNotificationConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SccV2OrganizationNotificationConfigStreamingConfigOutputReference <a name="SccV2OrganizationNotificationConfigStreamingConfigOutputReference" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.Initializer"></a>

```typescript
import { sccV2OrganizationNotificationConfig } from '@cdktf/provider-google'

new sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.property.filterInput">filterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.property.filter">filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfig">SccV2OrganizationNotificationConfigStreamingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.property.filterInput"></a>

```typescript
public readonly filterInput: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SccV2OrganizationNotificationConfigStreamingConfig;
```

- *Type:* <a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigStreamingConfig">SccV2OrganizationNotificationConfigStreamingConfig</a>

---


### SccV2OrganizationNotificationConfigTimeoutsOutputReference <a name="SccV2OrganizationNotificationConfigTimeoutsOutputReference" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { sccV2OrganizationNotificationConfig } from '@cdktf/provider-google'

new sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeouts">SccV2OrganizationNotificationConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SccV2OrganizationNotificationConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.sccV2OrganizationNotificationConfig.SccV2OrganizationNotificationConfigTimeouts">SccV2OrganizationNotificationConfigTimeouts</a>

---



