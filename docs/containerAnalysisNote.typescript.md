# `google_container_analysis_note`

Refer to the Terraform Registory for docs: [`google_container_analysis_note`](https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_analysis_note).

# `containerAnalysisNote` Submodule <a name="`containerAnalysisNote` Submodule" id="@cdktf/provider-google.containerAnalysisNote"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerAnalysisNote <a name="ContainerAnalysisNote" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_analysis_note google_container_analysis_note}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer"></a>

```typescript
import { containerAnalysisNote } from '@cdktf/provider-google'

new containerAnalysisNote.ContainerAnalysisNote(scope: Construct, id: string, config: ContainerAnalysisNoteConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig">ContainerAnalysisNoteConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig">ContainerAnalysisNoteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.putAttestationAuthority">putAttestationAuthority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.putRelatedUrl">putRelatedUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.resetExpirationTime">resetExpirationTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.resetLongDescription">resetLongDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.resetRelatedNoteNames">resetRelatedNoteNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.resetRelatedUrl">resetRelatedUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.resetShortDescription">resetShortDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putAttestationAuthority` <a name="putAttestationAuthority" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.putAttestationAuthority"></a>

```typescript
public putAttestationAuthority(value: ContainerAnalysisNoteAttestationAuthority): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.putAttestationAuthority.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthority">ContainerAnalysisNoteAttestationAuthority</a>

---

##### `putRelatedUrl` <a name="putRelatedUrl" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.putRelatedUrl"></a>

```typescript
public putRelatedUrl(value: IResolvable | ContainerAnalysisNoteRelatedUrl[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.putRelatedUrl.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrl">ContainerAnalysisNoteRelatedUrl</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.putTimeouts"></a>

```typescript
public putTimeouts(value: ContainerAnalysisNoteTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeouts">ContainerAnalysisNoteTimeouts</a>

---

##### `resetExpirationTime` <a name="resetExpirationTime" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.resetExpirationTime"></a>

```typescript
public resetExpirationTime(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLongDescription` <a name="resetLongDescription" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.resetLongDescription"></a>

```typescript
public resetLongDescription(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRelatedNoteNames` <a name="resetRelatedNoteNames" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.resetRelatedNoteNames"></a>

```typescript
public resetRelatedNoteNames(): void
```

##### `resetRelatedUrl` <a name="resetRelatedUrl" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.resetRelatedUrl"></a>

```typescript
public resetRelatedUrl(): void
```

##### `resetShortDescription` <a name="resetShortDescription" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.resetShortDescription"></a>

```typescript
public resetShortDescription(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.isConstruct"></a>

```typescript
import { containerAnalysisNote } from '@cdktf/provider-google'

containerAnalysisNote.ContainerAnalysisNote.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.isTerraformElement"></a>

```typescript
import { containerAnalysisNote } from '@cdktf/provider-google'

containerAnalysisNote.ContainerAnalysisNote.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.isTerraformResource"></a>

```typescript
import { containerAnalysisNote } from '@cdktf/provider-google'

containerAnalysisNote.ContainerAnalysisNote.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.attestationAuthority">attestationAuthority</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference">ContainerAnalysisNoteAttestationAuthorityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.relatedUrl">relatedUrl</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList">ContainerAnalysisNoteRelatedUrlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference">ContainerAnalysisNoteTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.attestationAuthorityInput">attestationAuthorityInput</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthority">ContainerAnalysisNoteAttestationAuthority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.expirationTimeInput">expirationTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.longDescriptionInput">longDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.relatedNoteNamesInput">relatedNoteNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.relatedUrlInput">relatedUrlInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrl">ContainerAnalysisNoteRelatedUrl</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.shortDescriptionInput">shortDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeouts">ContainerAnalysisNoteTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.expirationTime">expirationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.longDescription">longDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.relatedNoteNames">relatedNoteNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.shortDescription">shortDescription</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `attestationAuthority`<sup>Required</sup> <a name="attestationAuthority" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.attestationAuthority"></a>

```typescript
public readonly attestationAuthority: ContainerAnalysisNoteAttestationAuthorityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference">ContainerAnalysisNoteAttestationAuthorityOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `relatedUrl`<sup>Required</sup> <a name="relatedUrl" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.relatedUrl"></a>

```typescript
public readonly relatedUrl: ContainerAnalysisNoteRelatedUrlList;
```

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList">ContainerAnalysisNoteRelatedUrlList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.timeouts"></a>

```typescript
public readonly timeouts: ContainerAnalysisNoteTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference">ContainerAnalysisNoteTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `attestationAuthorityInput`<sup>Optional</sup> <a name="attestationAuthorityInput" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.attestationAuthorityInput"></a>

```typescript
public readonly attestationAuthorityInput: ContainerAnalysisNoteAttestationAuthority;
```

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthority">ContainerAnalysisNoteAttestationAuthority</a>

---

##### `expirationTimeInput`<sup>Optional</sup> <a name="expirationTimeInput" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.expirationTimeInput"></a>

```typescript
public readonly expirationTimeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `longDescriptionInput`<sup>Optional</sup> <a name="longDescriptionInput" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.longDescriptionInput"></a>

```typescript
public readonly longDescriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `relatedNoteNamesInput`<sup>Optional</sup> <a name="relatedNoteNamesInput" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.relatedNoteNamesInput"></a>

```typescript
public readonly relatedNoteNamesInput: string[];
```

- *Type:* string[]

---

##### `relatedUrlInput`<sup>Optional</sup> <a name="relatedUrlInput" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.relatedUrlInput"></a>

```typescript
public readonly relatedUrlInput: IResolvable | ContainerAnalysisNoteRelatedUrl[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrl">ContainerAnalysisNoteRelatedUrl</a>[]

---

##### `shortDescriptionInput`<sup>Optional</sup> <a name="shortDescriptionInput" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.shortDescriptionInput"></a>

```typescript
public readonly shortDescriptionInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ContainerAnalysisNoteTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeouts">ContainerAnalysisNoteTimeouts</a>

---

##### `expirationTime`<sup>Required</sup> <a name="expirationTime" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.expirationTime"></a>

```typescript
public readonly expirationTime: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `longDescription`<sup>Required</sup> <a name="longDescription" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.longDescription"></a>

```typescript
public readonly longDescription: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `relatedNoteNames`<sup>Required</sup> <a name="relatedNoteNames" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.relatedNoteNames"></a>

```typescript
public readonly relatedNoteNames: string[];
```

- *Type:* string[]

---

##### `shortDescription`<sup>Required</sup> <a name="shortDescription" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.shortDescription"></a>

```typescript
public readonly shortDescription: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNote.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerAnalysisNoteAttestationAuthority <a name="ContainerAnalysisNoteAttestationAuthority" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthority"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthority.Initializer"></a>

```typescript
import { containerAnalysisNote } from '@cdktf/provider-google'

const containerAnalysisNoteAttestationAuthority: containerAnalysisNote.ContainerAnalysisNoteAttestationAuthority = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthority.property.hint">hint</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHint">ContainerAnalysisNoteAttestationAuthorityHint</a></code> | hint block. |

---

##### `hint`<sup>Required</sup> <a name="hint" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthority.property.hint"></a>

```typescript
public readonly hint: ContainerAnalysisNoteAttestationAuthorityHint;
```

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHint">ContainerAnalysisNoteAttestationAuthorityHint</a>

hint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_analysis_note#hint ContainerAnalysisNote#hint}

---

### ContainerAnalysisNoteAttestationAuthorityHint <a name="ContainerAnalysisNoteAttestationAuthorityHint" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHint.Initializer"></a>

```typescript
import { containerAnalysisNote } from '@cdktf/provider-google'

const containerAnalysisNoteAttestationAuthorityHint: containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHint.property.humanReadableName">humanReadableName</a></code> | <code>string</code> | The human readable name of this Attestation Authority, for example "qa". |

---

##### `humanReadableName`<sup>Required</sup> <a name="humanReadableName" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHint.property.humanReadableName"></a>

```typescript
public readonly humanReadableName: string;
```

- *Type:* string

The human readable name of this Attestation Authority, for example "qa".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_analysis_note#human_readable_name ContainerAnalysisNote#human_readable_name}

---

### ContainerAnalysisNoteConfig <a name="ContainerAnalysisNoteConfig" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.Initializer"></a>

```typescript
import { containerAnalysisNote } from '@cdktf/provider-google'

const containerAnalysisNoteConfig: containerAnalysisNote.ContainerAnalysisNoteConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.attestationAuthority">attestationAuthority</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthority">ContainerAnalysisNoteAttestationAuthority</a></code> | attestation_authority block. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.name">name</a></code> | <code>string</code> | The name of the note. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.expirationTime">expirationTime</a></code> | <code>string</code> | Time of expiration for this note. Leave empty if note does not expire. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_analysis_note#id ContainerAnalysisNote#id}. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.longDescription">longDescription</a></code> | <code>string</code> | A detailed description of the note. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_analysis_note#project ContainerAnalysisNote#project}. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.relatedNoteNames">relatedNoteNames</a></code> | <code>string[]</code> | Names of other notes related to this note. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.relatedUrl">relatedUrl</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrl">ContainerAnalysisNoteRelatedUrl</a>[]</code> | related_url block. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.shortDescription">shortDescription</a></code> | <code>string</code> | A one sentence description of the note. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeouts">ContainerAnalysisNoteTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `attestationAuthority`<sup>Required</sup> <a name="attestationAuthority" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.attestationAuthority"></a>

```typescript
public readonly attestationAuthority: ContainerAnalysisNoteAttestationAuthority;
```

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthority">ContainerAnalysisNoteAttestationAuthority</a>

attestation_authority block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_analysis_note#attestation_authority ContainerAnalysisNote#attestation_authority}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the note.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_analysis_note#name ContainerAnalysisNote#name}

---

##### `expirationTime`<sup>Optional</sup> <a name="expirationTime" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.expirationTime"></a>

```typescript
public readonly expirationTime: string;
```

- *Type:* string

Time of expiration for this note. Leave empty if note does not expire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_analysis_note#expiration_time ContainerAnalysisNote#expiration_time}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_analysis_note#id ContainerAnalysisNote#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `longDescription`<sup>Optional</sup> <a name="longDescription" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.longDescription"></a>

```typescript
public readonly longDescription: string;
```

- *Type:* string

A detailed description of the note.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_analysis_note#long_description ContainerAnalysisNote#long_description}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_analysis_note#project ContainerAnalysisNote#project}.

---

##### `relatedNoteNames`<sup>Optional</sup> <a name="relatedNoteNames" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.relatedNoteNames"></a>

```typescript
public readonly relatedNoteNames: string[];
```

- *Type:* string[]

Names of other notes related to this note.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_analysis_note#related_note_names ContainerAnalysisNote#related_note_names}

---

##### `relatedUrl`<sup>Optional</sup> <a name="relatedUrl" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.relatedUrl"></a>

```typescript
public readonly relatedUrl: IResolvable | ContainerAnalysisNoteRelatedUrl[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrl">ContainerAnalysisNoteRelatedUrl</a>[]

related_url block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_analysis_note#related_url ContainerAnalysisNote#related_url}

---

##### `shortDescription`<sup>Optional</sup> <a name="shortDescription" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.shortDescription"></a>

```typescript
public readonly shortDescription: string;
```

- *Type:* string

A one sentence description of the note.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_analysis_note#short_description ContainerAnalysisNote#short_description}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ContainerAnalysisNoteTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeouts">ContainerAnalysisNoteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_analysis_note#timeouts ContainerAnalysisNote#timeouts}

---

### ContainerAnalysisNoteRelatedUrl <a name="ContainerAnalysisNoteRelatedUrl" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrl.Initializer"></a>

```typescript
import { containerAnalysisNote } from '@cdktf/provider-google'

const containerAnalysisNoteRelatedUrl: containerAnalysisNote.ContainerAnalysisNoteRelatedUrl = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrl.property.url">url</a></code> | <code>string</code> | Specific URL associated with the resource. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrl.property.label">label</a></code> | <code>string</code> | Label to describe usage of the URL. |

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrl.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Specific URL associated with the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_analysis_note#url ContainerAnalysisNote#url}

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrl.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

Label to describe usage of the URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_analysis_note#label ContainerAnalysisNote#label}

---

### ContainerAnalysisNoteTimeouts <a name="ContainerAnalysisNoteTimeouts" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeouts.Initializer"></a>

```typescript
import { containerAnalysisNote } from '@cdktf/provider-google'

const containerAnalysisNoteTimeouts: containerAnalysisNote.ContainerAnalysisNoteTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_analysis_note#create ContainerAnalysisNote#create}. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_analysis_note#delete ContainerAnalysisNote#delete}. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_analysis_note#update ContainerAnalysisNote#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_analysis_note#create ContainerAnalysisNote#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_analysis_note#delete ContainerAnalysisNote#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_analysis_note#update ContainerAnalysisNote#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerAnalysisNoteAttestationAuthorityHintOutputReference <a name="ContainerAnalysisNoteAttestationAuthorityHintOutputReference" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.Initializer"></a>

```typescript
import { containerAnalysisNote } from '@cdktf/provider-google'

new containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.property.humanReadableNameInput">humanReadableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.property.humanReadableName">humanReadableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHint">ContainerAnalysisNoteAttestationAuthorityHint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `humanReadableNameInput`<sup>Optional</sup> <a name="humanReadableNameInput" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.property.humanReadableNameInput"></a>

```typescript
public readonly humanReadableNameInput: string;
```

- *Type:* string

---

##### `humanReadableName`<sup>Required</sup> <a name="humanReadableName" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.property.humanReadableName"></a>

```typescript
public readonly humanReadableName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerAnalysisNoteAttestationAuthorityHint;
```

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHint">ContainerAnalysisNoteAttestationAuthorityHint</a>

---


### ContainerAnalysisNoteAttestationAuthorityOutputReference <a name="ContainerAnalysisNoteAttestationAuthorityOutputReference" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.Initializer"></a>

```typescript
import { containerAnalysisNote } from '@cdktf/provider-google'

new containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.putHint">putHint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHint` <a name="putHint" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.putHint"></a>

```typescript
public putHint(value: ContainerAnalysisNoteAttestationAuthorityHint): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.putHint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHint">ContainerAnalysisNoteAttestationAuthorityHint</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.property.hint">hint</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference">ContainerAnalysisNoteAttestationAuthorityHintOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.property.hintInput">hintInput</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHint">ContainerAnalysisNoteAttestationAuthorityHint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthority">ContainerAnalysisNoteAttestationAuthority</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hint`<sup>Required</sup> <a name="hint" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.property.hint"></a>

```typescript
public readonly hint: ContainerAnalysisNoteAttestationAuthorityHintOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHintOutputReference">ContainerAnalysisNoteAttestationAuthorityHintOutputReference</a>

---

##### `hintInput`<sup>Optional</sup> <a name="hintInput" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.property.hintInput"></a>

```typescript
public readonly hintInput: ContainerAnalysisNoteAttestationAuthorityHint;
```

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityHint">ContainerAnalysisNoteAttestationAuthorityHint</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthorityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerAnalysisNoteAttestationAuthority;
```

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteAttestationAuthority">ContainerAnalysisNoteAttestationAuthority</a>

---


### ContainerAnalysisNoteRelatedUrlList <a name="ContainerAnalysisNoteRelatedUrlList" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.Initializer"></a>

```typescript
import { containerAnalysisNote } from '@cdktf/provider-google'

new containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.get"></a>

```typescript
public get(index: number): ContainerAnalysisNoteRelatedUrlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrl">ContainerAnalysisNoteRelatedUrl</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAnalysisNoteRelatedUrl[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrl">ContainerAnalysisNoteRelatedUrl</a>[]

---


### ContainerAnalysisNoteRelatedUrlOutputReference <a name="ContainerAnalysisNoteRelatedUrlOutputReference" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.Initializer"></a>

```typescript
import { containerAnalysisNote } from '@cdktf/provider-google'

new containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.resetLabel">resetLabel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLabel` <a name="resetLabel" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.resetLabel"></a>

```typescript
public resetLabel(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.property.labelInput">labelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.property.label">label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrl">ContainerAnalysisNoteRelatedUrl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.property.labelInput"></a>

```typescript
public readonly labelInput: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAnalysisNoteRelatedUrl;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteRelatedUrl">ContainerAnalysisNoteRelatedUrl</a>

---


### ContainerAnalysisNoteTimeoutsOutputReference <a name="ContainerAnalysisNoteTimeoutsOutputReference" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.Initializer"></a>

```typescript
import { containerAnalysisNote } from '@cdktf/provider-google'

new containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeouts">ContainerAnalysisNoteTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAnalysisNoteTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.containerAnalysisNote.ContainerAnalysisNoteTimeouts">ContainerAnalysisNoteTimeouts</a>

---



