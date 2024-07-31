# `sccManagementOrganizationEventThreatDetectionCustomModule` Submodule <a name="`sccManagementOrganizationEventThreatDetectionCustomModule` Submodule" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SccManagementOrganizationEventThreatDetectionCustomModule <a name="SccManagementOrganizationEventThreatDetectionCustomModule" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/scc_management_organization_event_threat_detection_custom_module google_scc_management_organization_event_threat_detection_custom_module}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.Initializer"></a>

```typescript
import { sccManagementOrganizationEventThreatDetectionCustomModule } from '@cdktf/provider-google'

new sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule(scope: Construct, id: string, config: SccManagementOrganizationEventThreatDetectionCustomModuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig">SccManagementOrganizationEventThreatDetectionCustomModuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig">SccManagementOrganizationEventThreatDetectionCustomModuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.resetConfig">resetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.resetEnablementState">resetEnablementState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.putTimeouts"></a>

```typescript
public putTimeouts(value: SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts">SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts</a>

---

##### `resetConfig` <a name="resetConfig" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.resetConfig"></a>

```typescript
public resetConfig(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetEnablementState` <a name="resetEnablementState" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.resetEnablementState"></a>

```typescript
public resetEnablementState(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.resetType"></a>

```typescript
public resetType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SccManagementOrganizationEventThreatDetectionCustomModule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.isConstruct"></a>

```typescript
import { sccManagementOrganizationEventThreatDetectionCustomModule } from '@cdktf/provider-google'

sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.isTerraformElement"></a>

```typescript
import { sccManagementOrganizationEventThreatDetectionCustomModule } from '@cdktf/provider-google'

sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.isTerraformResource"></a>

```typescript
import { sccManagementOrganizationEventThreatDetectionCustomModule } from '@cdktf/provider-google'

sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.generateConfigForImport"></a>

```typescript
import { sccManagementOrganizationEventThreatDetectionCustomModule } from '@cdktf/provider-google'

sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SccManagementOrganizationEventThreatDetectionCustomModule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SccManagementOrganizationEventThreatDetectionCustomModule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SccManagementOrganizationEventThreatDetectionCustomModule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/scc_management_organization_event_threat_detection_custom_module#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SccManagementOrganizationEventThreatDetectionCustomModule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.lastEditor">lastEditor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference">SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.configInput">configInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.enablementStateInput">enablementStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.organizationInput">organizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts">SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.config">config</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.enablementState">enablementState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.organization">organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `lastEditor`<sup>Required</sup> <a name="lastEditor" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.lastEditor"></a>

```typescript
public readonly lastEditor: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.timeouts"></a>

```typescript
public readonly timeouts: SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference">SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.configInput"></a>

```typescript
public readonly configInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `enablementStateInput`<sup>Optional</sup> <a name="enablementStateInput" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.enablementStateInput"></a>

```typescript
public readonly enablementStateInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.organizationInput"></a>

```typescript
public readonly organizationInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts">SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.config"></a>

```typescript
public readonly config: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `enablementState`<sup>Required</sup> <a name="enablementState" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.enablementState"></a>

```typescript
public readonly enablementState: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SccManagementOrganizationEventThreatDetectionCustomModuleConfig <a name="SccManagementOrganizationEventThreatDetectionCustomModuleConfig" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.Initializer"></a>

```typescript
import { sccManagementOrganizationEventThreatDetectionCustomModule } from '@cdktf/provider-google'

const sccManagementOrganizationEventThreatDetectionCustomModuleConfig: sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.organization">organization</a></code> | <code>string</code> | Numerical ID of the parent organization. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.config">config</a></code> | <code>string</code> | Config for the module. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.displayName">displayName</a></code> | <code>string</code> | The human readable name to be displayed for the module. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.enablementState">enablementState</a></code> | <code>string</code> | The state of enablement for the module at the given level of the hierarchy. Possible values: ["ENABLED", "DISABLED"]. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/scc_management_organization_event_threat_detection_custom_module#id SccManagementOrganizationEventThreatDetectionCustomModule#id}. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.location">location</a></code> | <code>string</code> | Location ID of the parent organization. Only global is supported at the moment. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts">SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.type">type</a></code> | <code>string</code> | Immutable. Type for the module. e.g. CONFIGURABLE_BAD_IP. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

Numerical ID of the parent organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/scc_management_organization_event_threat_detection_custom_module#organization SccManagementOrganizationEventThreatDetectionCustomModule#organization}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.config"></a>

```typescript
public readonly config: string;
```

- *Type:* string

Config for the module.

For the resident module, its config value is defined at this level.
For the inherited module, its config value is inherited from the ancestor module.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/scc_management_organization_event_threat_detection_custom_module#config SccManagementOrganizationEventThreatDetectionCustomModule#config}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The human readable name to be displayed for the module.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/scc_management_organization_event_threat_detection_custom_module#display_name SccManagementOrganizationEventThreatDetectionCustomModule#display_name}

---

##### `enablementState`<sup>Optional</sup> <a name="enablementState" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.enablementState"></a>

```typescript
public readonly enablementState: string;
```

- *Type:* string

The state of enablement for the module at the given level of the hierarchy. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/scc_management_organization_event_threat_detection_custom_module#enablement_state SccManagementOrganizationEventThreatDetectionCustomModule#enablement_state}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/scc_management_organization_event_threat_detection_custom_module#id SccManagementOrganizationEventThreatDetectionCustomModule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Location ID of the parent organization. Only global is supported at the moment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/scc_management_organization_event_threat_detection_custom_module#location SccManagementOrganizationEventThreatDetectionCustomModule#location}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts">SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/scc_management_organization_event_threat_detection_custom_module#timeouts SccManagementOrganizationEventThreatDetectionCustomModule#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Immutable. Type for the module. e.g. CONFIGURABLE_BAD_IP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/scc_management_organization_event_threat_detection_custom_module#type SccManagementOrganizationEventThreatDetectionCustomModule#type}

---

### SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts <a name="SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts.Initializer"></a>

```typescript
import { sccManagementOrganizationEventThreatDetectionCustomModule } from '@cdktf/provider-google'

const sccManagementOrganizationEventThreatDetectionCustomModuleTimeouts: sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/scc_management_organization_event_threat_detection_custom_module#create SccManagementOrganizationEventThreatDetectionCustomModule#create}. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/scc_management_organization_event_threat_detection_custom_module#delete SccManagementOrganizationEventThreatDetectionCustomModule#delete}. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/scc_management_organization_event_threat_detection_custom_module#update SccManagementOrganizationEventThreatDetectionCustomModule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/scc_management_organization_event_threat_detection_custom_module#create SccManagementOrganizationEventThreatDetectionCustomModule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/scc_management_organization_event_threat_detection_custom_module#delete SccManagementOrganizationEventThreatDetectionCustomModule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/scc_management_organization_event_threat_detection_custom_module#update SccManagementOrganizationEventThreatDetectionCustomModule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference <a name="SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.Initializer"></a>

```typescript
import { sccManagementOrganizationEventThreatDetectionCustomModule } from '@cdktf/provider-google'

new sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts">SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts">SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts</a>

---



